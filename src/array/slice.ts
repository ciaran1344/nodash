export function slice<T>(array: readonly T[], start?: number, end?: number): T[] {
  return array.slice(start, end);
}
