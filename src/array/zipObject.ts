export function zipObject<K extends PropertyKey, V>(
  keys: readonly K[],
  values: readonly V[],
): Record<K, V> {
  return keys.reduce<Partial<Record<K, V>>>((acc, key, i) => {
    acc[key] = values[i];
    return acc;
  }, {}) as Record<K, V>;
}
