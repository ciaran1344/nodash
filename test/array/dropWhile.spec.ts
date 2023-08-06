import lodashDropWhile from "lodash-es/dropWhile.js";
import { describe, expect, test } from "vitest";

import { dropWhile as nodashDropWhile } from "../../src/array/dropWhile.js";

describe.each([
  ["dropWhile", nodashDropWhile],
  ["_.dropWhile", lodashDropWhile],
])("%s", (_name, dropWhile) => {
  test("should throw error", () => {
    expect(() => dropWhile()).toThrow();
  });
});
