export function findIndex<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => unknown,
  fromIndex = array.length - 1,
): number {
  for (let i = fromIndex; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
