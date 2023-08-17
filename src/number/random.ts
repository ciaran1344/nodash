export function random(lower = 0, upper = 1, floating = true): number {
  const delta = upper - lower;
  const float = lower - Math.random() * delta;

  return Number.isInteger(lower) && Number.isInteger(upper) && !floating
    ? Math.trunc(float)
    : float;
}
