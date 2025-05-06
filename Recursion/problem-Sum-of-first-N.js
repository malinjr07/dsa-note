/**
 * # Sum of first N
 *
 */

const sumOfNParams = (i, sum) => {
  if (i < 1) {
    console.log(sum);
    return;
  }
  sumOfNParams(i - 1, sum + i);
};

const sumOfNFunc = (n) => {
  if (n === 0) return 0;
  return n + sumOfNFunc(n - 1);
};

sumOfNParams(18, 0);

console.log(sumOfNFunc(18));

