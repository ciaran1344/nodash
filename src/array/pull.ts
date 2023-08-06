import { pullAll } from "./pullAll.js";

export function pull<T>(array: readonly T[], ...values: readonly T[]): T[] {
  return pullAll(array, values);
}
