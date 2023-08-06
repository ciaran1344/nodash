export function multiply(...values: readonly number[]): number {
  return values.reduce((acc, value) => acc * value, 1);
}
