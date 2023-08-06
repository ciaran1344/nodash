import lodashUnzip from "lodash-es/unzip.js";
import { describe, expect, test } from "vitest";

import { unzip as nodashUnzip } from "../../src/array/unzip.js";

describe.each([
  ["unzip", nodashUnzip],
  ["_.unzip", lodashUnzip],
])("%s", (_name, unzip) => {
  test("should unzip arrays", () => {
    const result = unzip([
      ["a", 1, true],
      ["b", 2, false],
    ]);

    expect(result).toEqual([
      ["a", "b"],
      [1, 2],
      [true, false],
    ]);
  });
});
