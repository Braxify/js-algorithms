function recursiveMax(arr, max = 0) {
    if (!arr.length) {
        return max;
    }
    return recursiveMax(arr.slice(1), arr[0] > max ? arr[0] : max);
}

const a = [1, 2, 3, 4, 9, 5, -5];
console.log(recursiveMax(a));
