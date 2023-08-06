export function divide(first: number, ...rest: number[]): number {
  return rest.reduce((acc, value) => acc / value, first);
}
