import process from 'node:process';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const { source, fields } = request.body ?? {};
  if (typeof source !== 'string' || !fields || typeof fields !== 'object' ||
      Array.isArray(fields) || Object.values(fields).some(value => typeof value !== 'string')) {
    return response.status(400).json({ error: 'Invalid enquiry details.' });
  }
  const name = fields?.name?.trim();
  const contact = fields?.contact?.trim();
  const message = fields?.message?.trim();

  if (!source || !name || !contact || !message) {
    return response.status(400).json({ error: 'Please complete your name, contact details and message.' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM) {
    return response.status(500).json({ error: 'Email delivery has not been configured yet.' });
  }

  const fieldRows = Object.entries(fields)
    .filter(([, value]) => value?.trim())
    .map(([label, value]) => `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600">${escapeHtml(label)}</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(value)}</td></tr>`)
    .join('');
  const replyTo = emailPattern.test(contact) ? contact : undefined;

  let resendResponse;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM,
      to: [process.env.CONTACT_TO || 'info@agrim.africa'],
      reply_to: replyTo,
      subject: `New ${source} enquiry from ${name}`,
      html: `<h2>New ${escapeHtml(source)} enquiry</h2><table style="border-collapse:collapse">${fieldRows}</table>`,
    }),
    });
  } catch {
    console.error('Resend request failed before receiving a response.');
    return response.status(502).json({ error: 'We could not send your enquiry. Please try again later.' });
  }

  if (!resendResponse.ok) {
    console.error('Resend failed:', await resendResponse.text());
    return response.status(502).json({ error: 'We could not send your enquiry. Please try again later.' });
  }

  return response.status(200).json({ success: true });
}
