import { test, expect } from '@playwright/test';
import { POST, GET } from '../src/app/api/contact/route';

test('mail endpoint validates requests, uses fixed recipient, and reports provider failures', async () => {
  const saved = { ...process.env };
  const originalFetch = globalThis.fetch;
  let calls = 0;
  const input = { name: 'Test', email: 'visitor@example.com', company: 'Example', message: 'This is a local automated test.', consent: true };
  const request = (body: unknown, origin = 'https://happyglobalinc.com') => new Request('https://happyglobalinc.com/api/contact/', {
    method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify(body),
  });
  try {
    process.env.CONTACT_MAIL_PROVIDER = 'resend';
    process.env.CONTACT_MAIL_FROM = 'website@example.com';
    process.env.CONTACT_MAIL_TO = 'owner@example.com';
    delete process.env.RESEND_API_KEY;
    expect(await (await GET()).json()).toEqual({ available: false });
    expect((await POST(request(input))).status).toBe(503);
    process.env.RESEND_API_KEY = 'local-test-only';
    globalThis.fetch = async (_url, init) => {
      calls++;
      const payload = JSON.parse(init?.body as string);
      expect(payload.to).toEqual(['owner@example.com']);
      expect(payload.reply_to).toBe('visitor@example.com');
      expect(payload.text).toContain(input.message);
      return Response.json({ id: 'local-test' });
    };
    expect((await POST(request(input, 'https://foreign.example'))).status).toBe(403);
    expect((await POST(request({ ...input, consent: false }))).status).toBe(400);
    expect((await POST(request({ ...input, email: 'bad\r\nBcc:other@example.com' }))).status).toBe(400);
    expect((await POST(request({ ...input, website: 'spam' }))).status).toBe(400);
    expect((await POST(request({ ...input, message: 'x'.repeat(25000) }))).status).toBe(413);
    expect(calls).toBe(0);
    expect((await POST(request({ ...input, to: 'attacker@example.com' }))).status).toBe(200);
    expect(calls).toBe(1);
    globalThis.fetch = async () => Response.json({}, { status: 500 });
    expect((await POST(request(input))).status).toBe(502);
    for (let i = 0; i < 3; i++) await POST(request(input));
    expect((await POST(request(input))).status).toBe(429);
  } finally {
    globalThis.fetch = originalFetch;
    for (const key of Object.keys(process.env)) if (!(key in saved)) delete process.env[key];
    Object.assign(process.env, saved);
  }
});

test('contact form keeps failed input and displays success only after delivery acceptance', async ({ page }) => {
  let succeed = false;
  await page.route('**/api/contact/', route => route.fulfill({
    status: route.request().method() === 'GET' || succeed ? 200 : 502,
    json: route.request().method() === 'GET' ? { available: true } : { code: succeed ? 'sent' : 'delivery' },
  }));
  await page.goto('/contact/');
  await page.locator('[name=name]').fill('Test');
  await page.locator('[name=email]').fill('visitor@example.com');
  await page.locator('[name=message]').fill('This is a browser test enquiry.');
  await page.locator('[name=consent]').check();
  await page.getByRole('button', { name: '发送咨询', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('内容已保留');
  await expect(page.locator('[name=message]')).toHaveValue('This is a browser test enquiry.');
  succeed = true;
  await page.getByRole('button', { name: '发送咨询', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('咨询已发送');
  await expect(page.locator('[name=message]')).toHaveValue('');
});
