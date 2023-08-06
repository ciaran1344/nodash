export function nthArg(index: number): <T>(...args: readonly T[]) => T | undefined {
  return (...args) => args.at(index);
}
