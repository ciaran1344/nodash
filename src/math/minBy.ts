import { min } from "./min.js";

export function minBy<T>(values: readonly T[], iteratee: (value: T) => number): number | undefined {
  return min(values.map(iteratee));
}
