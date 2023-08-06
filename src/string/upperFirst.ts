export function upperFirst(string: string): string {
  const head = string[0] || "";
  const tail = string.slice(1);

  return head.toUpperCase() + tail;
}
