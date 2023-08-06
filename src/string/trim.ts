import { trimEnd } from "./trimEnd.js";
import { trimStart } from "./trimStart.js";

export function trim(string: string, chars?: string): string {
  return trimStart(trimEnd(string, chars), chars);
}
