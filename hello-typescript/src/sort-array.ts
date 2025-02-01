interface DataItem {
  createdDate: string;
  modifiedDate: string;
}

export default function sortArray(array: DataItem[]): DataItem[] {
const newArray = array;
  for (let i = 0; i < newArray.length - 1; i++) {
    for (let j = 0; j < newArray.length - i - 1; j++) {
      const currentItemLatestDate = new Date(newArray[j].modifiedDate || newArray[j].createdDate);
      const nextItemLatestDate = new Date(newArray[j + 1].modifiedDate || newArray[j + 1].createdDate);

      if (currentItemLatestDate < nextItemLatestDate) {
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
  }
  return newArray;
}