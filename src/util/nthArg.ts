export function nthArg(index: number): <T>(...args: T[]) => T | undefined {
  return (...args) => args.at(index);
}
