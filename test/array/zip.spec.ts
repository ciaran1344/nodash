import lodashZip from "lodash-es/zip.js";
import { describe, expect, test } from "vitest";

import { zip as nodashZip } from "../../src/array/zip.js";

describe.each([
  ["zip", nodashZip],
  ["_.zip", lodashZip],
])("%s", (_name, zip) => {
  test("should zip arrays", () => {
    const result = zip<string | number | boolean>(["a", "b"], [1, 2], [true, false]);

    expect(result).toEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });
});
