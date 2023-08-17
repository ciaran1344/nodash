export function remove<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => unknown = () =>
    true,
): T[] {
  return array.filter((...args) => !predicate(...args));
}
