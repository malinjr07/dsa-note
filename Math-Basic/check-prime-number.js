/**
 * # Print all Divisors
 *
 */

const checkPrime = (n) => {
  let countDivisors = 0
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      countDivisors++;
   
      if (n / i !== i) {
        countDivisors++
      }
    }
  }
  return countDivisors===2;
};

console.log(checkPrime(29));

