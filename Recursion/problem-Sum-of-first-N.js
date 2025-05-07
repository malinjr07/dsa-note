/**
 * # Sum of first N
 *
 */

const sumOfNFunc = (n) => {
  if (n === 0) return 0;
  return n + sumOfNFunc(n - 1);
};

const sumOfNParams = (n, sum) => {
  if (n < 1) return sum;
  return sumOfNParams(n - 1, sum + n);
};

console.log(sumOfNParams(18, 0));

console.log(sumOfNFunc(18));

