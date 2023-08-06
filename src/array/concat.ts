export function concat<T>(...sources: (T | ConcatArray<T>)[]): T[] {
  return Array<T>().concat(...sources);
}
