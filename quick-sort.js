function quickSort(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr[0];
    const lessThanPivot = arr.slice(1).filter(el => el <= pivot);
    const greaterThanPivot = arr.slice(1).filter(el => el > pivot);

    return quickSort(lessThanPivot).concat([pivot], quickSort(greaterThanPivot));
}

const a = [1, 8, 5, 9];
console.log(quickSort(a));
