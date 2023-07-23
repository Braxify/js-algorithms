function binarySearch(array, item, low = 0, high = array.length - 1) {
    if (low > high) {
        return null;
    }

    let mid = Math.floor((low + high) / 2);
    let guess = array[mid];

    if (guess === item) {
        return mid;
    }

    if (guess > item) {
        return binarySearch(array, item, low, mid - 1);
    } else {
        return binarySearch(array, item, mid + 1, high);
    }
}

const arr = [1, 5, 10, 20, 11, 12];
console.log(binarySearch(arr, 11));
