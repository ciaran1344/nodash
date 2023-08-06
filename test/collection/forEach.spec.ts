import lodashForEach from "lodash-es/forEach.js";
import { describe, expect, test, vi } from "vitest";

import { forEach as nodashForEach } from "../../src/collection/forEach.js";

describe.each([
  ["forEach", nodashForEach],
  ["_.forEach", lodashForEach],
])("%s", (_name, forEach) => {
  test("should iterate empty array", () => {
    const iteratee = vi.fn();
    forEach([], iteratee);

    expect(iteratee).toHaveBeenCalledTimes(0);
  });
});
