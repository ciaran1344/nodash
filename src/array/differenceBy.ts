export function differenceBy<T>(
  array: readonly T[],
  other: readonly T[],
  iteratee: (value: T) => unknown,
): T[] {
  const otherKeys = new Set(other.map(iteratee));

  return array.filter((value) => !otherKeys.has(iteratee(value)));
}
