export function takeRight<T>(array: readonly T[], count = 1): T[] {
  return array.slice(-count);
}
