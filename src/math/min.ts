import { identity } from "../util/identity.js";

import { minBy } from "./minBy.js";

export function min(values: readonly number[]): number | undefined {
  return minBy(values, identity);
}
