function repeatingNumbersSort(arr) {
  const countMap = arr.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }

    return acc;
  }, {});

  const resultArr = Object.entries(countMap)
    .sort((a, b) => {
      return a[1] - b[1];
    })
    .map((item) => {
      return +item[0];
    });
  return resultArr;
}

const a = [1, 1, 1, 3, 3, 2];
console.log(a, repeatingNumbersSort(a));
const b = [1, 3, 3, 7];
console.log(b, repeatingNumbersSort(b));
