import { mean } from "./mean.js";

export function meanBy<T>(
  values: readonly T[],
  iteratee: (value: T) => number,
): number | undefined {
  return mean(values.map(iteratee));
}
