interface DataItem {
  createdDate: string;
  modifiedDate: string;
}

export default function sortArray(array: DataItem[]): DataItem[] {
  const result = [...array];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      const currentItemLatestDate = new Date(result[j].modifiedDate || result[j].createdDate);
      const nextItemLatestDate = new Date(result[j + 1].modifiedDate || result[j + 1].createdDate);

      if (currentItemLatestDate < nextItemLatestDate) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}