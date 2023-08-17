export function fill<T>(
  array: readonly T[],
  value: T,
  start?: number,
  end?: number,
): T[] {
  return [...array].fill(value, start, end);
}
