export function range(start: number | undefined = 0, end: number, step = 1): number[] {
  const values: number[] = [];

  for (let i = start; i < end; i += step) {
    values.push(i);
  }

  return values;
}
