const bruteForce = (arr = [], k) => {
  if (k < arr[0]) return k;
  for (const element of arr) {
    if (element <= k) k++;
    else break;
  }
  return k;
};

// console.log(bruteForce([2], 1));
console.log(bruteForce([2, 3, 4, 7, 11], 5));
console.log(bruteForce([1, 2, 3, 4], 2));

const optimalSolution = (arr = [], k) => {
  if (k < arr[0]) return k;
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const missingNumbers = arr[mid] - (mid + 1);
    if (missingNumbers < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  const res = k - (arr[right] - (right + 1)) + arr[right];
  return res;
};

console.log(optimalSolution([2, 3, 4, 7, 11], 5));
console.log(optimalSolution([1, 2, 3, 4], 2));

