export function maxBy<T>(
  values: readonly T[],
  iteratee: (value: T) => number,
): T | undefined {
  return values.reduce<T | undefined>(
    (acc, value) =>
      acc === undefined || iteratee(value) > iteratee(acc) ? value : acc,
    undefined,
  );
}
