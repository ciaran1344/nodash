export function last<T>(array: readonly T[]): T | undefined {
  return array.at(-1);
}
