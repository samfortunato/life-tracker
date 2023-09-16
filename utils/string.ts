export function convertToHtmlTagId(str: string) {
  return str
    .toLowerCase()
    .replace(' ', '-');
}
