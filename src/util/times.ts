export function times<T>(size: number, callback: (index: number) => T): T[] {
  // Fixed length arrays are more efficient than dynamic resizing
  const array = Array<T>(size);
  for (let i = 0; i < size; i++) {
    array[i] = callback(i);
  }
  return array;
}
