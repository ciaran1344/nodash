import { range } from "./range.js";

export function rangeRight(
  start: number | undefined,
  end: number,
  step?: number,
): number[] {
  return range(start, end, step).reverse();
}
