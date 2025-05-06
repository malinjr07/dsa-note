/**
 * # 7. Reverse Integer
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

var reverse = function (n) {
  let reverseNum = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  console.log(reverseNum);
};

reverse(77985);
// reverse(-120);

