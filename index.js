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

console.log(isMatch('aabbbbc', '.*b*bc'));

// Example 4:
// Input : text =”aabbbbc” ; pattern=”.*b*bc”
