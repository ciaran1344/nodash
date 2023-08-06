export function inRange(value: number, start: number | undefined = 0, end: number): boolean {
  if (start < end) {
    return value >= start && value < end;
  }

  // `start` and `end` are reversed
  return value >= end && value < start;
}
