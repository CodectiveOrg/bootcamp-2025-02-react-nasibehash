export default function returnNumbers<T>(arr: T[]): number {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      num++;
    }
  }
  return num;
}
