export function add(...values: number[]): number {
  return values.reduce((acc, value) => acc + value, 0);
}
