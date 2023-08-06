export function intersection<T>(array: readonly T[], ...others: (readonly T[])[]): T[] {
  return array.filter((value) => others.every((other) => other.includes(value)));
}
