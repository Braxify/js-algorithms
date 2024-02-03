/**
 * Функция бинарного поиска.
 * @param {Array<number>} array - ОТСОРТИРОВАННЫЙ массив.
 * @param {number} item - Искомый элемент.
 * @returns {number|null} - Индекс найденного элемента или null, если элемент не найден.
 */
function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = array[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const arr = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 2));
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr2, 3));
