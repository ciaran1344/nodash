import { identity } from "../util/identity.js";

import { maxBy } from "./maxBy.js";

export function max(values: readonly number[]): number | undefined {
  return maxBy(values, identity);
}
