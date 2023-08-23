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
  const sortedArr = [];
  const copyArray = [...arr];

  for (let i = 0; i < arr.length; i++) {
    const smallestIdx = findSmallestIndex(copyArray);
    sortedArr.push(copyArray.splice(smallestIdx, 1)[0]);
  }

  return sortedArr;
}

const a = [5, 2, 3, 1];
console.log(selectionSort(a));
