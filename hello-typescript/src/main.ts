import reverseArray from './reverse-array';
import returnNumbers from './return-numbers';
import sortArray from './sort-array';

// Reverse Arrays
console.log('Reverse numbers -->', reverseArray([1, 2, 3, 4, 5, 6, 7]));
console.log('Reverse strings -->', reverseArray(['hello', 'world', 'typescript']));
console.log('Reverse objects -->', reverseArray([{id: 1}, {id: 2}, {id: 3}]));

// Return numbers
console.log('return numbers', returnNumbers([1, 'hello', 3, 4, 5, 'typescript']));

// Sort Array
const arr = [{
  createdDate: '2025-01-18T09:12:56.849Z',
  modifiedDate: '2025-01-20T05:11:56.849Z'
}, {
  createdDate: '2025-01-03T09:11:56.849Z',
  modifiedDate: '2025-01-30T11:11:11.849Z'
}, {createdDate: '2025-01-20T10:11:56.849Z', modifiedDate: ''}, {
  createdDate: '2025-01-08T09:12:56.849Z',
  modifiedDate: '2025-01-31T05:11:56.849Z'
}];
console.log('sort by date', sortArray(arr));
