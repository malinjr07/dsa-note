const bruteForce = (s = '') => {};

console.log(bruteForce());

const optimalSolution = (s = '') => {
  const counter = new Map();
  for (const char of s) {
    counter.set(char, (counter.get(char) || 0) + 1);
  }
  const pq = Array.from(counter.entries()).sort((a, b) => b[1] - a[1]);
  let str = '';
  for (const [char, freq] of pq) {
    str += char.repeat(freq);
  }
  return str;
};

console.log(optimalSolution('Accccaaa'));

