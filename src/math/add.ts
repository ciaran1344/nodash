export function add(...values: readonly number[]): number {
  return values.reduce((acc, value) => acc + value, 0);
}
