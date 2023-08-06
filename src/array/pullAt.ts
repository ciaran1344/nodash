export function pullAt<T>(array: readonly T[], indexes: readonly number[]): T[] {
  return array.filter((_value, index) => !indexes.includes(index));
}
