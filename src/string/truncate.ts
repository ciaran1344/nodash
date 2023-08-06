export interface TruncateOptions {
  length?: number;
  omission?: string;
  separator?: RegExp | string;
}

export function truncate(
  string: string,
  { length = 30, omission = "...", separator = "" }: TruncateOptions = {},
): string {
  const rawLength = length - omission.length;

  let result = "";
  for (const substring of string.split(separator)) {
    const newResult = result + substring;
    if (newResult.length > rawLength) {
      break;
    }
    result = newResult;
  }

  return result + omission;
}
