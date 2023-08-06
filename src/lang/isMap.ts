// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isMap(value: unknown): value is Map<any, any> {
  return value instanceof Map;
}
