function recursiveSum(arr) {
    if (!arr.length) {
        return 0;
    }
    return arr[0] + recursiveSum(arr.slice(1));
}

const a = [1, 2, 3, 4, 5];
console.log(recursiveSum(a));
