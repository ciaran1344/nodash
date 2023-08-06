export function forEachRight<T extends object>(
  collection: T,
  iteratee: (value: T[keyof T], key: string, collection: T) => void,
): void {
  const keyValues = Object.entries(collection) as [string, T[keyof T]][];

  for (let i = keyValues.length - 1; i >= 0; i--) {
    const [key, value] = keyValues[i]!;

    iteratee(value, key, collection);
  }
}

export {
  /** @deprecated Use {@link forEachRight}. */
  forEachRight as eachRight,
};
