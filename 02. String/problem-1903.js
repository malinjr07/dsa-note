const bruteForce = (num = '') => {
  if (parseInt(num.slice(-1)) % 2 === 1) return num;

  const subArray = [];

  const numArr = num.split('');
  for (const int of numArr) {
    if (subArray.at(-1)) {
      subArray.push(subArray.at(-1) + int);
    } else {
      subArray.push(int);
    }
  }

  let res = '';
  for (const int of subArray) {
    const number = parseInt(int.slice(-1));
    if (number % 2 !== 0) {
      res = int;
    }
  }
  return res;
};

// console.log(bruteForce('3542'));
console.log(bruteForce('3691669784801845146'));

const betterSolution = (num = '') => {
  if (parseInt(num.slice(-1)) % 2 === 1) return num;
  let lastOddIndx = -1,
    res = '';

  for (let i = 0; i < num.length; i++) {
    const int = parseInt(num[i]);
    if (int % 2 !== 0) {
      lastOddIndx = i;
    }
  }
  for (let i = 0; i <= lastOddIndx; i++) {
    res += num[i];
  }
  return res;
};

console.log(betterSolution('3691669784801845146'));

const optimalSolution = (num = '') => {
  if (parseInt(num.slice(-1)) % 2 === 1) return num;
  for (let i = num.length - 1; i >= 0; i--) {
    const n = parseInt(num[i]);
    if (n % 2 !== 0) return num.slice(0, i + 1);
  }
  return '';
};

console.log(optimalSolution('3691669784801845146'));

