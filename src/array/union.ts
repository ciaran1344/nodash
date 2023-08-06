import { uniq } from "./uniq.js";

export function union<T>(...arrays: (readonly T[])[]): T[] {
  return uniq(arrays.flat());
}
