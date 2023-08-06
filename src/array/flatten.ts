// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flatten<T extends readonly any[]>(array: T): FlatArray<T, 1>[] {
  return array.flat();
}
