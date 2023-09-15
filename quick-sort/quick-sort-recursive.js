function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const lessThanPivot = [];
  const greaterThanPivot = [];
  arr.forEach((el, idx) => {
    if (idx === 0) {
      return;
    }
    if (el <= pivot) {
      lessThanPivot.push(el);
    } else if (el > pivot) {
      greaterThanPivot.push(el);
    }
  });

  return quickSort(lessThanPivot).concat([pivot], quickSort(greaterThanPivot));
}

const a = [9, 8, 1, 5, -1, 0];
console.log(quickSort(a));
