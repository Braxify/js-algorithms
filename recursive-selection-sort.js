function findSmallestIndex(arr) {
  let smallestIdx = 0;
  let smallestElement = arr[smallestIdx];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestIdx = i;
    }
  }

  return smallestIdx;
}

function selectionSort(arr) {
  if (!arr.length) return [];

  const copyArray = [...arr];

  const smallestIdx = findSmallestIndex(copyArray);
  const smallestElement = copyArray.splice(smallestIdx, 1);

  return smallestElement.concat(selectionSort(copyArray));
}

const a = [5, 2, 3, 1];
console.log(selectionSort(a));
