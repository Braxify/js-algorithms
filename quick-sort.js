function quickSort(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr[0];
    const lessThanPivot = arr.slice(1).filter(el => el <= pivot);
    const greaterThanPivot = arr.slice(1).filter(el => el > pivot);

    return quickSort(lessThanPivot).concat([pivot], quickSort(greaterThanPivot));
}

function quickSort2(arr) {
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
console.log(quickSort2(a));
