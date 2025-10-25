const bruteForce = (nums = []) => {};

console.log(bruteForce());

const optimalSolution = (nums = [], target) => {
  const binarySearch = (leftBias) => {
    let left = 0,
      right = nums.length - 1,
      i = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (target > nums[mid]) {
        left = mid + 1;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        i = mid;
        if (leftBias) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return i;
  };

  const leftIndex = binarySearch(true);
  const rightIndex = binarySearch(false);
  return [leftIndex, rightIndex];
};

console.log(optimalSolution([5, 7, 7, 8, 8, 10], 8));

