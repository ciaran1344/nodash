import { max } from "./max.js";

export function maxBy<T>(values: readonly T[], iteratee: (value: T) => number): number | undefined {
  return max(values.map(iteratee));
}
