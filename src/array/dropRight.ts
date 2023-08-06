export function dropRight<T>(array: readonly T[], count = 1): T[] {
  return array.slice(0, -count);
}
