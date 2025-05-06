/**
 * # 7. Reverse Integer
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

var reverse = function (n) {
  let reverseNum = 0;
  let tempNum = n
  while (tempNum > 0) {
    const lastDigit = tempNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    tempNum = Math.floor(tempNum / 10);
  }
  console.log(reverseNum===n);
};

reverse(121);
// reverse(-120);

