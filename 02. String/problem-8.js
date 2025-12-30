const optimalSolution = (s = '') => {
  const maxInt = 2 ** 31 - 1;
  const minInt = -(2 ** 31);
  let i = 0,
    n = s.length;
  while (i < n && s[i] === ' ') {
    i++;
  }
  if (i === n) {
    return 0;
  }
  let sign = 1;
  if (s[i] === '-') {
    sign = -1;
    i++;
  } else if (s[i] === '+') {
    i++;
  }
  res = 0;
  while (i < n && s[i] >= '0' && s[i] <= '9') {
    const digit = parseInt(s[i]);
    res = res * 10 + digit;
    if (res * sign >= maxInt) {
      return maxInt;
    }
    if (res * sign <= minInt) {
      return minInt;
    }
    i++;
  }
  return sign * res;
};

console.log(optimalSolution('              -045124b2221'));

