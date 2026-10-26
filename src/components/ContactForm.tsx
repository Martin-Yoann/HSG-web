'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';

export function ContactForm({ locale }: { locale: 'zh' | 'en' }) {
  const en = locale === 'en';
  const [available, setAvailable] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const lock = useRef(false);
  const [status, setStatus] = useState('');
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/contact/', { signal: AbortSignal.any([controller.signal, AbortSignal.timeout(8000)]) }).then(r => r.json()).then(data => setAvailable(data.available === true))
      .catch(() => { if (!controller.signal.aborted) setAvailable(false); });
    return () => controller.abort();
  }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current || !available) return;
    lock.current = true; setBusy(true); setStatus(''); setSent(false);
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('/api/contact/', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(data), consent: data.get('consent') === 'on' }),
        signal: AbortSignal.timeout(25000),
      });
      if (!response.ok) {
        setStatus(response.status === 429
          ? (en ? 'Too many attempts. Please wait 10 minutes or email us directly.' : '提交较频繁，请 10 分钟后重试，或直接发送邮件。')
          : (en ? 'Unable to confirm delivery. Your message is still here; please try again or email us directly.' : '暂时无法确认发送结果。内容已保留，请稍后重试或直接发送邮件。'));
        return;
      }
      setSent(true); form.reset();
      setStatus(en ? 'Your enquiry has been sent. Our team will reply to the email you provided.' : '咨询已发送，我们会通过您填写的邮箱回复。');
    } catch {
      setStatus(en ? 'Connection interrupted; delivery could not be confirmed. Your message has been kept.' : '连接中断，无法确认发送结果，填写内容已保留。');
    } finally { lock.current = false; setBusy(false); }
  }
  return <form className="form contact-form" onSubmit={submit} aria-busy={busy}>
    <h2>{en ? 'Send an enquiry' : '在线咨询'}</h2>
    <p>{en ? 'Your name, email, company and message will be sent to Happy Global Inc. in the United States to respond to this enquiry.' : '您填写的姓名、邮箱、公司及需求将发送给位于美国的 Happy Global Inc.，用于回复本次咨询。'}</p>
    <label>{en ? 'Name *' : '姓名 *'}<input name="name" autoComplete="name" required maxLength={100} /></label>
    <label>{en ? 'Email *' : '邮箱 *'}<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
    <label>{en ? 'Company' : '公司'}<input name="company" autoComplete="organization" maxLength={160} /></label>
    <label>{en ? 'How can we help? *' : '您的需求 *'}<textarea name="message" required minLength={10} maxLength={5000} rows={5} /></label>
    <div className="contact-form__trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="contact-form__consent"><input type="checkbox" name="consent" required /><span>{en ? 'I have read the ' : '我已阅读'}<a href={en ? '/en/privacy/' : '/privacy/'} target="_blank" rel="noopener">{en ? 'Privacy Policy' : '隐私政策'}</a>{en ? ' and agree to be contacted about this enquiry.' : '，同意就本次咨询与我联系。'}</span></label>
    <button className="btn" type="submit" disabled={!available || busy}>{busy ? (en ? 'Sending…' : '正在发送…') : (en ? 'Send enquiry' : '发送咨询')}</button>
    <p className="form__msg" role="status" aria-live="polite" data-success={sent}>{status || (available === null ? (en ? 'Checking availability…' : '正在连接…') : available === false ? (en ? 'Online enquiries are temporarily unavailable. Please use the email link above.' : '在线咨询暂未开放，请使用上方邮箱链接联系我们。') : '')}</p>
    <noscript>{en ? 'Please enable JavaScript or contact us using the email link above.' : '请启用 JavaScript，或通过上方邮箱链接联系我们。'}</noscript>
  </form>;
}
