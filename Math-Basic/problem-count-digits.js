/**
 * Given an integer N, return the number of digits in N.
 */

const countDigits = (n) => {
  while (n > 0) {
    const lastDigit = n % 10;
    console.log(lastDigit);
    n = Math.floor(n / 10);
  }
};

countDigits(77985);

