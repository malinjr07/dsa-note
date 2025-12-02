const optimalSolution = (s = '') => {
  const stringArr = s.split(' ');
  const res = [];

  for (let i = stringArr.length - 1; i >= 0; i--) {
    const word = stringArr[i];
    if (word) {
      res.push(word);
    }
  }

  return res.join(' ');
};

console.log(optimalSolution('  hello world  a good   example    '));

