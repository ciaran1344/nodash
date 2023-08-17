export function difference<T>(
  array: readonly T[],
  ...others: readonly (readonly T[])[]
): T[] {
  const otherValues = new Set(others.flat());

  return array.filter((value) => !otherValues.has(value));
}
