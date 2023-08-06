import lodashChunk from "lodash-es/chunk.js";
import { describe, expect, test } from "vitest";

import { chunk as nodashChunk } from "../../src/array/chunk.js";

describe.each([
  ["chunk", nodashChunk],
  ["_.chunk", lodashChunk],
])("%s", (_name, chunk) => {
  test("should chunk empty array", () => {
    const result = chunk([]);

    expect(result).toEqual([]);
  });

  test("should chunk array with default size", () => {
    const result = chunk(["a", "b", "c", "d"]);

    expect(result).toEqual([["a"], ["b"], ["c"], ["d"]]);
  });

  test("should chunk array", () => {
    const result = chunk(["a", "b", "c", "d"], 2);

    expect(result).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
});
