export function attempt<A extends unknown[]>(func: (...args: A) => unknown, ...args: A): unknown {
  try {
    return func(...args);
  } catch (error) {
    return error;
  }
}
