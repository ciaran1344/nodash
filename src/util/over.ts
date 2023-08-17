export function over<T, R>(
  iteratees: readonly ((value: T) => R)[],
): (value: T) => R[] {
  return (value) => iteratees.map((iteratee) => iteratee(value));
}
