import { size } from "./size.js";

export function isEmpty(value: {}): boolean {
  return size(value) === 0;
}
