import { uniqBy } from "./uniqBy.js";

export function union<T>(
  array1: readonly T[],
  array2: readonly T[],
  iteratee: (value: T) => unknown,
): T[] {
  return uniqBy([...array1, ...array2], iteratee);
}
