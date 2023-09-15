function knapSackProblemSolution(W, wt, val, n) {
    if (n == 0 || W == 0) {
        return [0, []];
    }

    if (wt[n - 1] > W) {
        return knapSackProblemSolution(W, wt, val, n - 1);
    } else {
        const [profit1, items1] = knapSackProblemSolution(W - wt[n - 1], wt, val, n - 1);
        const [profit2, items2] = knapSackProblemSolution(W, wt, val, n - 1);

        if (val[n - 1] + profit1 > profit2) {
            return [val[n - 1] + profit1, items1.concat(n - 1)];
        } else {
            return [profit2, items2];
        }
    }
}

// guitar, tape-recorder, laptop
const profit = [1500, 3000, 2000];
const weight = [1, 4, 3];
const W = 4;
const n = profit.length;
console.log(knapSackProblemSolution(W, weight, profit, n));