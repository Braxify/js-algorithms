const longestSubstring = (word1, word2) => {
  const arr = [];

  for (let i = 0; i < word1.length; i++) {
    // fill the columns
    arr[i] = word2.split("").fill(0);
  }

  let sizeSequence = 0;
  let indexSequence = 0;

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        if (i > 0 && j > 0) {
          arr[i][j] = arr[i - 1][j - 1] + 1;
        } else {
          arr[i][j] = 1;
        }

        if (arr[i][j] >= sizeSequence) {
          sizeSequence = arr[i][j];
          indexSequence = i + 1;
        }
      } else {
        arr[i][j] = 0;
      }
    }
  }

  return word1.slice(indexSequence - sizeSequence, indexSequence);
};

console.log(longestSubstring("fish", "hish")); // ish
console.log(longestSubstring("vista", "hish")); // is
