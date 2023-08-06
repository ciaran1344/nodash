import { pullAll } from "./pullAll.js";

export function pull<T>(array: readonly T[], ...values: T[]): T[] {
  return pullAll(array, values);
}
