export function uniqBy<T>(
  array: readonly T[],
  iteratee: (value: T) => unknown
): T[] {
  // Use a map to track the first value for each iteratee
  const map = new Map<unknown, T>();

  for (const value of array) {
    const key = iteratee(value);
    if (!map.has(key)) {
      map.set(key, value);
    }
  }

  return [...map.values()];
}
