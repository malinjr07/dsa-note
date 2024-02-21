// Function to check if the pattern
// consisting of '*', '.' and lowercase
// characters matches the text or not
function isMatch(text, pattern) {
  // Base Case
  if (text === '' || pattern === '') {
    return false;
  }

  // Stores length of text
  let N = text.length;

  // Stores length of pattern
  let M = pattern.length;

  // dp[j]: Check if { text[0], .. text[i] }
  // matches {pattern[0], ... pattern[j]} or not
  let dp = new Array(M + 1).fill(false);

  // Base Case
  dp[0] = true;

  // Iterate over the characters
  // of the string pattern
  for (let i = 0; i < M; i++) {
    if (pattern[i] === '*' && dp[i - 1]) {
      // Update dp[i + 1]
      dp[i + 1] = true;
    }
  }

  // Iterate over the characters
  // of both the strings
  for (let i = 0; i < N; i++) {
    let prev = dp[0];
    dp[0] = false;

    for (let j = 0; j < M; j++) {
      let temp = dp[j + 1];

      // If current character
      // in the pattern is '.'
      if (pattern[j] === '.') {
        // Update dp[j + 1]
        dp[j + 1] = prev;
      }

      // If current character in
      // both the strings are equal
      else if (pattern[j] === text[i]) {
        // Update dp[j + 1]
        dp[j + 1] = prev;
      }

      // If current character
      // in the pattern is '*'
      else if (pattern[j] === '*') {
        if (pattern[j - 1] !== text[i] && pattern[j - 1] !== '.') {
          // Update dp[j + 1]
          dp[j + 1] = dp[j - 1];
        } else {
          // Update dp[j + 1]
          dp[j + 1] = dp[j + 1] || dp[j] || prev;
        }
      } else {
        // Update dp[j + 1]
        dp[j + 1] = false;
      }

      prev = temp;
    }
  }

  // Return dp[M]
  return dp[M];
}

// console.log(isMatch('aabbbbc', '.*b*bc'));

// Example 4:
// Input : text =”aabbbbc” ; pattern=”.*b*bc”

var maxProfit = function (prices) {
  let profit = 0;
  let transactions = [];
  let i = 0;

  // loop through the prices array until the second last element
  while (i < prices.length - 1) {
    // find the local minimum by skipping the prices that are higher than the next price

    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    // if we reach the end of the array, there is no more profit to be made
    if (i == prices.length - 1) {
      break;
    }
    // otherwise, we buy the stock at the local minimum
    let buy = prices[i];
    i++;
    // find the local maximum by skipping the prices that are lower than the next price
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    // we sell the stock at the local maximum
    let sell = prices[i];

    // update the profit and the transactions
    profit += sell - buy;
    transactions.push([buy, sell]);
  }

  // return the profit and the transactions
  return [profit, transactions];
};

console.log(maxProfit([0, -15, 6, -3, 7, 10, 1]));
