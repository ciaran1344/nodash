import { times } from "../util/times.js";

export function zip<T>(...arrays: (readonly T[])[]): T[][] {
  if (arrays.length === 0) {
    return [];
  }

  const { length } = arrays[0]!;

  return times(length, (i) => arrays.map((array) => array[i]!));
}
