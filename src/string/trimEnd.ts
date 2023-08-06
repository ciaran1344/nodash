export const WHITESPACE = " \n\t";

export function trimEnd(string: string, chars = WHITESPACE): string {
  for (let i = string.length; i > 0; i--) {
    if (!chars.includes(string[i]!)) {
      return string.slice(0, i + 1);
    }
  }

  return "";
}
