import ReverseArray from './reverse-array';
import countNumbers from './count-numbers';
import sortArray from './sort-array';

function callReverseArrayFn() {
  console.log('Rotate numbers -->', ReverseArray([1, 2, 3, 4, 5, 6, 7]));
  console.log('Rotate strings -->', ReverseArray(['hello', 'world', 'typescript']));
  console.log('Rotate objects -->', ReverseArray([{id: 1}, {id: 2}, {id: 3}]));
}

function callCountNumbersFn() {
  console.log('Count numbers', countNumbers([1, 'hello', 3, 4, 5, 'typescript']));
}

function callSortArrayFn() {
  const array = [{
    createdDate: '2025-01-18T09:12:56.849Z',
    modifiedDate: '2025-01-20T05:11:56.849Z'
  }, {
    createdDate: '2025-01-03T09:11:56.849Z',
    modifiedDate: '2025-01-30T11:11:11.849Z'
  }, {createdDate: '2025-01-20T10:11:56.849Z', modifiedDate: ''}, {
    createdDate: '2025-01-08T09:12:56.849Z',
    modifiedDate: '2025-01-31T05:11:56.849Z'
  }];
  console.log('sort by date', sortArray(array));
}

callReverseArrayFn();
callCountNumbersFn();
callSortArrayFn();

