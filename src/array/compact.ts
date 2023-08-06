export function compact<T>(array: readonly T[]): NonNullable<T>[] {
  return array.filter((value): value is NonNullable<T> => Boolean(value));
}
