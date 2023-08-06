export function dropRightWhile<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => unknown,
): T[] {
  let i = array.length - 1;
  // eslint-disable-next-line no-empty
  for (; i >= 0 && predicate(array[i]!, i, array); i--) {}

  return array.slice(0, i);
}
