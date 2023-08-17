export function forEach<T extends object>(
  collection: T,
  interatee: (value: T[keyof T], key: string, collection: T) => void,
): void {
  const keyValues = Object.entries(collection) as [string, T[keyof T]][];

  for (const [key, value] of keyValues) {
    interatee(value, key, collection);
  }
}

export {
  /** @deprecated Use {@link forEach}. */
  forEach as each,
};
