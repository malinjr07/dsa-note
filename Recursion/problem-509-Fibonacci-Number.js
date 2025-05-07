/**
 * # Fibonacci Number
 *
 */

const fibonacciNum = (n) => {
  if (n <= 1) return n;
  return fibonacciNum(n - 2) + fibonacciNum(n - 1);
};

console.log(fibonacciNum(15));

