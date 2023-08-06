import { WHITESPACE } from "./trimEnd.js";

export function trimStart(string: string, chars = WHITESPACE): string {
  for (let i = 0; i < string.length; i++) {
    if (!chars.includes(string[i]!)) {
      return string.slice(i);
    }
  }

  return "";
}
