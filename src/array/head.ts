export function head<T>(array: readonly T[]): T | undefined {
  return array[0];
}

export {
  /** @deprecated Use {@link first}. */
  head as first,
};
