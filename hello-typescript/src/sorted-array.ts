interface DataItem {
  createdDate: string;
  modifiedDate: string;
}

export default function sortedArray(array: DataItem[]): DataItem[] {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      const currentItemLatestDate = new Date(array[j].modifiedDate || array[j].createdDate);
      const nextItemLatestDate = new Date(array[j + 1].modifiedDate || array[j + 1].createdDate);

      if (currentItemLatestDate < nextItemLatestDate) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}