export function min(values: readonly number[]): number | undefined {
  return values.reduce<number | undefined>(
    (acc, value) => (acc === undefined || value < acc ? value : acc),
    undefined,
  );
}
