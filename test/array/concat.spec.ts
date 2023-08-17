import lodashConcat from "lodash-es/concat.js";
import { describe, expect, test } from "vitest";

import { concat as nodashConcat } from "../../src/array/concat.js";

describe.each([
  ["concat", nodashConcat],
  ["_.concat", lodashConcat],
])("%s", (_name, concat) => {
  test("should concat 0 values", () => {
    expect(concat()).toEqual([]);
  });

  test("should concat 1 value", () => {
    expect(concat(1)).toEqual([1]);
  });

  test("should concat multiple values", () => {
    expect(concat(1, 2, 3)).toEqual([1, 2, 3]);
  });

  test("should concat multiple arrays", () => {
    expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should concat mixed values", () => {
    expect(concat(1, 2, 3, [4, 5, 6], 7, 8, 9)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});
