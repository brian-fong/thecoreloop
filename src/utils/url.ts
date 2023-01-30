// Check if given string contains a URL
export default function isURL(url: string): boolean {
  return Boolean(new URL(url));
}

