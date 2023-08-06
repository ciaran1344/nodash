// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flattenDepth<T extends readonly any[], D extends number>(
  array: T,
  depth: D,
): FlatArray<T, D>[] {
  return array.flat(depth);
}
