export function generateAccordionID(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replaceAll(' ', '-')
    .replace('?', '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}
