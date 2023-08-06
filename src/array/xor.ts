import { union } from "./union.js";

export function xor<T>(...arrays: readonly (readonly T[])[]): T[] {
  const values = union(...arrays);

  return values.filter((value) => arrays.filter((array) => array.includes(value)).length === 1);
}
