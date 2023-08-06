export function pullAll<T>(array: readonly T[], values: readonly T[]): T[] {
  return array.filter((value) => !values.includes(value));
}
