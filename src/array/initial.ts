export function initial<T>(array: readonly T[]): T[] {
  return array.slice(0, -1);
}
