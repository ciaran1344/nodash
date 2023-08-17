import { times } from "../util/times.js";

export function chunk<T>(array: readonly T[], size = 1): T[][] {
  const numChunks = Math.ceil(array.length / size);

  return times(numChunks, (index) =>
    array.slice(size * index, size * (index + 1)),
  );
}
