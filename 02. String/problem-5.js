const optimalSolution = (s = '') => {
  let longest = '';
  const findLongestPalindrome = (a, b) => {
    while (a >= 0 && b < s.length && s[a] === s[b]) {
      a -= 1;
      b += 1;
    }
    // we're taking the next char of a and previous character of b because the current indexes are not palindrome
    return s.slice(a + 1, b);
  };

  for (let i = 0; i < s.length; i++) {
    const evenStr = findLongestPalindrome(i, i);
    const oddStr = findLongestPalindrome(i, i + 1);
    const longestPalindrome = evenStr.length > oddStr.length ? evenStr : oddStr;
    if (longestPalindrome.length > longest.length) {
      longest = longestPalindrome;
    }
  }

  return longest;
};

console.log(optimalSolution());

