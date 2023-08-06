export function clamp(
  value: number,
  lower = Number.NEGATIVE_INFINITY,
  upper = Number.POSITIVE_INFINITY,
): number {
  if (value < lower) {
    return lower;
  }
  if (value > upper) {
    return upper;
  }
  return value;
}
