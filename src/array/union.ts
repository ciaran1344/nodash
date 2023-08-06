import { uniq } from "./uniq.js";

export function union<T>(...arrays: readonly (readonly T[])[]): T[] {
  return uniq(arrays.flat());
}
