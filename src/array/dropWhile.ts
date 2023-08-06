export function dropWhile<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => unknown,
): T[] {
  let i = 0;
  // eslint-disable-next-line no-empty
  for (; i < array.length && predicate(array[i]!, i, array); i++) {}

  return array.slice(i);
}
