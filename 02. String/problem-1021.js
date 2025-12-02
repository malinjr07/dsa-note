const betterSolution = (s = '') => {
  let res = '',
    balance = 0,
    start = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? balance++ : balance--;
    if (balance === 0) {
      res += s.slice(start + 1, i);
      start = i + 1;
    }
  }
  return res;
};

console.log(betterSolution('(()())(())(()(()))'));

const optimalSolution = (s = '') => {
  let res = '',
    parenthesCount = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (letter === '(') {
      if (parenthesCount) {
        res += letter;
      }
      parenthesCount++;
    } else {
      parenthesCount--;
      if (parenthesCount) {
        res += letter;
      }
    }
  }
  return res;
};

console.log(optimalSolution('(()())(())(()(()))'));

