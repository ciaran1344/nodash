export function lastIndexOf(
  array: readonly unknown[],
  value: unknown,
  fromIndex = array.length - 1,
): number {
  for (let i = fromIndex; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
