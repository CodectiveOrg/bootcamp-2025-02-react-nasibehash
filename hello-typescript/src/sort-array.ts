interface DataItem {
  createdDate: string;
  modifiedDate: string;
}
export default function sortArray(arr: DataItem[]): DataItem[] {

  const newArray = arr.map(item => ({
    ...item,
    latestDate: new Date(item.modifiedDate || item.createdDate)
  }));

  for (let i = 0; i < newArray.length - 1; i++) {
    for (let j = 0; j < newArray.length - i - 1; j++) {
      if (newArray[j].latestDate < newArray[j + 1].latestDate) {
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
  }

  return newArray.map(({ latestDate, ...rest }) => rest);
}