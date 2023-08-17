export function replace(
  string: string,
  pattern: RegExp | string,
  replacement: string,
): string {
  return string.replace(pattern, replacement);
}
