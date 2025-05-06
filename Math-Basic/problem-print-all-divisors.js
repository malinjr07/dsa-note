/**
 * # Print all Divisors
 *
 */

const allDivisor = (n) => {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
};

allDivisor(43);

const allDivisorOptimal = (n) => {
  const divisors = [];
  for (let i = 1; i*i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      const secondDivisor = n / i;
      if (secondDivisor !== i) {
        divisors.push(secondDivisor);
      }
    }
  }
  return divisors;
};

console.log(allDivisorOptimal(36));
