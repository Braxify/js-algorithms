function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const lessThanPivot = arr.slice(1).filter((el) => el <= pivot);
  const greaterThanPivot = arr.slice(1).filter((el) => el > pivot);

  return quickSort(lessThanPivot).concat([pivot], quickSort(greaterThanPivot));
}

const a = [9, 8, 1, 5, -1, 0];
console.log(quickSort(a));
