import { createHash } from 'node:crypto';
import { mailConfigured, sendContactMail } from '@/lib/contact-mail';

export const runtime = 'nodejs';
export const maxDuration = 30;
const attempts = new Map<string, { count: number; expires: number }>();
const respond = (status: number, code: string) => Response.json({ code }, {
  status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '600' } : {}) },
});

export async function GET() {
  return Response.json({ available: mailConfigured() }, { headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const allowed = new Set([new URL(request.url).origin, process.env.NEXT_PUBLIC_SITE_URL || 'https://happyglobalinc.com']);
  if (!origin || !allowed.has(origin)) return respond(403, 'origin');
  if (!request.headers.get('content-type')?.startsWith('application/json')) return respond(415, 'format');
  // Bound actual bytes, including requests without Content-Length.
  const reader = request.body?.getReader();
  if (!reader) return respond(400, 'invalid');
  let bytes = 0;
  const chunks: Uint8Array[] = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.length;
      if (bytes > 24000) { await reader.cancel(); return respond(413, 'size'); }
      chunks.push(value);
    }
  } catch { return respond(400, 'invalid'); }
  let body;
  try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return respond(400, 'invalid'); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return respond(400, 'invalid');
  const { name, email, company = '', message, website = '', consent } = body;
  if (typeof website !== 'string' || website) return respond(400, 'invalid');
  if (typeof name !== 'string' || !name.trim() || name.length > 100 ||
      typeof email !== 'string' || email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
      typeof company !== 'string' || company.length > 160 ||
      typeof message !== 'string' || message.trim().length < 10 || message.length > 5000 || consent !== true) return respond(400, 'invalid');
  if (!mailConfigured()) return respond(503, 'unavailable');
  // Per-instance protection; use Vercel Firewall rate limits for a global limit.
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires < now) attempts.delete(key);
  const ip = request.headers.get('x-vercel-forwarded-for') || request.headers.get('x-forwarded-for') || 'local';
  const key = createHash('sha256').update(ip).digest('hex');
  const entry = attempts.get(key) || { count: 0, expires: now + 600000 };
  if (entry.count >= 5 || attempts.size >= 10000) return respond(429, 'rate');
  entry.count++; attempts.set(key, entry);
  try {
    await sendContactMail({ name: name.trim(), email, company: company.trim(), message: message.trim() });
    return respond(200, 'sent');
  } catch {
    // Never log message content, credentials or provider responses.
    console.error('Contact mail delivery failed');
    return respond(502, 'delivery');
  }
}
