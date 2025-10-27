const optimalSolution = (nums = [], target) => {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }

    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    // Find out the Sorted Portion
    if (nums[left] <= nums[mid]) {
      // This is left sorted portion
      if (nums[left] > target || target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // This is right sorted portion
      if (nums[right] < target || target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

console.log(optimalSolution([5, 6, 7, 0, 1, 2, 3, 4], 3));

