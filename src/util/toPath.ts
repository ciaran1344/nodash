export function toPath(value: string): string[] {
  return value.split(/\.|\[|\]/);
}
