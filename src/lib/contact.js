export async function sendInquiry(source, form) {
  const fields = Object.fromEntries(new FormData(form).entries());
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source, fields }),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.success !== true) {
    throw new Error(result.error || 'We could not send your enquiry. Please try again later.');
  }
}
