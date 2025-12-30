const optimalSolution = (s = '') => {
  let counter = 0,
    maxNest = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      counter++;
      maxNest = Math.max(maxNest, counter);
    } else if (char === ')') {
      counter--;
    } else {
      continue;
    }
  }
  return maxNest;
};

console.log(optimalSolution('(1+(2*3)+((8)/4))+1'));

