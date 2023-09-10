const recursiveLongestSubsequence = (word1, word2) => {
  if (word1.length === 0 || word2.length === 0) {
    return 0;
  }

  if (word1[word1.length - 1] === word2[word2.length - 1]) {
    return recursiveLongestSubsequence(word1.slice(0, -1), word2.slice(0, -1)) + 1;
  }

  return Math.max(
    recursiveLongestSubsequence(word1.slice(0, -1), word2),
    recursiveLongestSubsequence(word1, word2.slice(0, -1))
  );
};

console.log(recursiveLongestSubsequence("fish", "fosh")); // 3
console.log(recursiveLongestSubsequence("fort", "fosh")); // 2
