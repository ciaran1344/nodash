export function repeat(string: string, count = 1): string {
  return Array(count).fill(string).join("");
}
