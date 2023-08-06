import lodashDropRightWhile from "lodash-es/dropRightWhile.js";
import { describe, expect, test } from "vitest";

import { dropRightWhile as nodashDropRightWhile } from "../../src/array/dropRightWhile.js";

describe.each([
  ["dropRightWhile", nodashDropRightWhile],
  ["_.dropRightWhile", lodashDropRightWhile],
])("%s", (_name, dropRightWhile) => {
  test("should throw error", () => {
    expect(() => dropRightWhile()).toThrow();
  });
});
