function recursiveCount(arr) {
    if (!arr.length) {
        return 0;
    }
    return 1 + recursiveCount(arr.slice(1));
}

const a = [1, 2, 3, 4, 5];
console.log(recursiveCount(a));
