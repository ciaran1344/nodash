export function split(
  string: string,
  separator: string,
  limit?: number,
): string[] {
  return string.split(separator, limit);
}
