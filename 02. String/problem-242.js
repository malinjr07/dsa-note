const bruteForce = (strs = '') => {};

console.log(bruteForce());

const optimalSolution = (s = '', t = '') => {
  if (s.length !== t.length) return false;
  let validator = new Array(256).fill(0);
  for (let i = 0; i < s.length; i++) {
    validator[s.charCodeAt(i)] += 1;
    validator[t.charCodeAt(i)] -= 1;
  }
  for (let i = 0; i < validator.length; i++) {
    const element = validator[i];
    if (element !== 0) return false;
  }
  return true;
};

console.log(optimalSolution('ggii', 'eekk'));

