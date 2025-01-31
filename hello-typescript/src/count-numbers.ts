export default function countNumbers<T>(array: T[]): number {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array [i] === 'number') {
      count++;
    }
  }
  return count;
}
