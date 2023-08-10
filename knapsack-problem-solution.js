// https://en.wikipedia.org/wiki/Knapsack_problem

function knapSackProblemSolution(W, wt, val, n) {
    const dpArr = Array(W + 1).fill(0);
    const items = Array(n).fill(false);

    for (let i = 1; i < n + 1; i++) {
        for (let w = W; w >= 0; w--) {

            if (wt[i - 1] <= w) {
                if (dpArr[w] < dpArr[w - wt[i - 1]] + val[i - 1]) {
                    dpArr[w] = dpArr[w - wt[i - 1]] + val[i - 1];
                    items[i - 1] = true;
                }
            }
        }
    }

    let maxProfit = dpArr[W];
    let maxProfitItems = [];
    let weightLeft = W;
    for (let i = n - 1; i >= 0; i--) {
        if (weightLeft >= wt[i] && items[i]) {
            maxProfitItems.push(i);
            weightLeft -= wt[i];
        }
    }

    return [maxProfit, maxProfitItems.reverse()];
}

// guitar, tape-recorder, laptop
const profit = [1500, 3000, 2000];
const weight = [1, 4, 3];
const W = 4;
const n = profit.length;
console.log(knapSackProblemSolution(W, weight, profit, n));