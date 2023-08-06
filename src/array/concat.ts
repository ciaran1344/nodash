export function concat<T>(...sources: readonly (T | ConcatArray<T>)[]): T[] {
  return Array<T>().concat(...sources);
}
