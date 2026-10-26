import nodemailer from 'nodemailer';

export function mailConfigured() {
  const common = process.env.CONTACT_MAIL_FROM && process.env.CONTACT_MAIL_TO;
  if (process.env.CONTACT_MAIL_PROVIDER === 'resend') return Boolean(common && process.env.RESEND_API_KEY);
  return Boolean(common && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendContactMail(input: { name: string; email: string; company: string; message: string }) {
  const mail = {
    from: process.env.CONTACT_MAIL_FROM!,
    to: process.env.CONTACT_MAIL_TO!,
    replyTo: input.email,
    subject: 'HSG website enquiry / 官网咨询',
    text: `Name / 姓名: ${input.name}\nCompany / 公司: ${input.company || '—'}\nEmail / 邮箱: ${input.email}\n\n${input.message}`,
  };
  if (process.env.CONTACT_MAIL_PROVIDER === 'resend') {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: mail.from, to: [mail.to], reply_to: mail.replyTo, subject: mail.subject, text: mail.text }),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok || !(await response.json()).id) throw new Error('Mail provider rejected request');
    return;
  }
  const port = Number(process.env.SMTP_PORT || 465);
  if (![465, 587].includes(port)) throw new Error('Unsupported SMTP port');
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST, port, secure: port === 465, requireTLS: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
    disableFileAccess: true, disableUrlAccess: true,
  });
  try {
    const result = await transport.sendMail(mail);
    if (!result.accepted.length || result.rejected.length) throw new Error('Recipient rejected');
  } finally { transport.close(); }
}
