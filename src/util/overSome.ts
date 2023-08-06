export function overSome<T>(predicates: readonly ((value: T) => unknown)[]): (value: T) => boolean {
  return (value) => predicates.some((predicate) => predicate(value));
}
