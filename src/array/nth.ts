export function nth<T>(array: readonly T[], index: number): T | undefined {
  return array.at(index);
}
