import { add } from "./add.js";

export function mean(values: readonly number[]): number {
  return add(...values) / values.length;
}
