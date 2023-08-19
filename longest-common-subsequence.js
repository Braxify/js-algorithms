const longestSubsequence = (word1, word2) => {
  const arr = [];

  for (let i = 0; i < word1.length; i++) {
    // fill the columns
    arr[i] = word2.split("").fill(0);
  }

  if (arr.length === 0 || arr[0].length === 0) {
    return 0;
  }

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        if (i > 0 && j > 0) {
          arr[i][j] = arr[i - 1][j - 1] + 1;
        } else {
          arr[i][j] = 1;
        }
      } else {
        arr[i][j] = Math.max(
          i > 0 ? arr[i - 1][j] : 0,
          j > 0 ? arr[i][j - 1] : 0
        );
      }
    }
  }

  return arr[word1.length - 1][word2.length - 1];
};

console.log(longestSubsequence("fish", "fosh")); // 3
console.log(longestSubsequence("fort", "fosh")); // 2
