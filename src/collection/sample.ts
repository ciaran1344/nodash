import { random } from "../number/random.js";

export function sample<T extends object>(
  collection: T,
): T[keyof T] | undefined {
  const values = Object.values(collection) as T[keyof T][];
  const index = random(0, values.length, false);

  return values[index];
}
