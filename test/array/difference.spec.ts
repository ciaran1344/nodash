import lodashDifference from "lodash-es/difference.js";
import { describe, expect, test } from "vitest";

import { difference as nodashDifference } from "../../src/array/difference.js";

describe.each([
  ["difference", nodashDifference],
  ["_.difference", lodashDifference],
])("%s", (_name, difference) => {
  test("should throw error", () => {
    expect(() => difference()).toThrow();
  });
});
