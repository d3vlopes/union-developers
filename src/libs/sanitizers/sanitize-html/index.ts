import sanitizeHtml from 'sanitize-html'

export function sanitizeHTML(html: string) {
  const clearHTML = sanitizeHtml(html)

  return clearHTML
}
