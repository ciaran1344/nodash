export function overEvery<T>(
  predicates: readonly ((value: T) => unknown)[],
): (value: T) => boolean {
  return (value) => predicates.every((predicate) => predicate(value));
}
