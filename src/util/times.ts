export function times<T>(size: number, callback: (index: number) => T): T[] {
  const array: T[] = [];
  for (let i = 0; i < size; i++) {
    array.push(callback(i));
  }
  return array;
}
