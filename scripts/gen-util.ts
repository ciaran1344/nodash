import { accessSync, writeFileSync } from "fs";

import * as Lodash from "lodash-es";

import { upperFirst } from "../src/string/upperFirst.js";

const CATEGORIES = [
  "array",
  "collection",
  "date",
  "lang",
  "math",
  "number",
  "object",
  "string",
  "util",
];
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const UTILS = Object.keys(Lodash);

if (process.argv.length < 4) {
  throw Error("Usage: <util> <category>");
}

const [, , util, category] = process.argv as [string, string, string, string];

if (!CATEGORIES.includes(category)) {
  throw Error(
    `Unknown category ${category}, expected one of: ${CATEGORIES.join(", ")}`,
  );
}
if (!UTILS.includes(util)) {
  throw Error(`Unknown util ${util}, expected one of: ${UTILS.join(", ")}`);
}

const utilUrl = new URL(`../src/${category}/${util}.ts`, import.meta.url);

const utilContents = `export function ${util}(): never {
  throw Error('Not implemented');
}
`;

try {
  accessSync(utilUrl);
  console.log("Util already exists at", utilUrl.pathname);
} catch {
  console.log("Writing util to", utilUrl.pathname);
  writeFileSync(utilUrl, utilContents);
}

const testUrl = new URL(`../test/${category}/${util}.spec.ts`, import.meta.url);

const testContents = `import lodash${upperFirst(
  util,
)} from "lodash-es/${util}.js";
import { describe, expect, test } from "vitest";

import { ${util} as nodash${upperFirst(
  util,
)} } from "../../src/${category}/${util}.js";

describe.each([
  ["${util}", nodash${upperFirst(util)}],
  ["_.${util}", lodash${upperFirst(util)}],
])("%s", (_name, ${util}) => {
  test("should throw error", () => {
    expect(() => ${util}()).toThrow();
  });
});
`;

try {
  accessSync(testUrl);
  console.log("Test already exists at", testUrl.pathname);
} catch {
  console.log("Writing test to", testUrl.pathname);
  writeFileSync(testUrl, testContents);
}
