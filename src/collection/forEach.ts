export function forEach<T extends object>(
  collection: T,
  interatee: (value: T[keyof T], key: string, collection: T) => void,
): void {
  (Object.entries(collection) as [string, T[keyof T]][]).forEach(([key, value]) => {
    interatee(value, key, collection);
  });
}

export {
  /** @deprecated Use {@link forEach}. */
  forEach as each,
};
