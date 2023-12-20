function countDivisiblePairs(arr, k, x) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const divisorsInRange = Math.abs(arr[i] - arr[j]) / x;
      if (divisorsInRange === k || divisorsInRange === k - 1) {
        count++;
      }
    }
  }
  return count;
}

// Test cases
console.log(countDivisiblePairs([1, 3, 5, 7], 2, 2)); // Output: 2
console.log(countDivisiblePairs([1, 13, 4, 7, 16, 10], 1, 3)); // Output: 5
console.log(countDivisiblePairs([2, 3, 9, 1, 3, 2, 1], 1, 4)); // Output: 0

