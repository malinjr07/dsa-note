const optimalSolution = (nums = [], target) => {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (
      nums[mid] === target ||
      nums[left] === target ||
      nums[right] === target
    ) {
      return true;
    }

    if (nums[left] < nums[mid]) {
      if (target > nums[left] && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[left] > nums[mid]) {
      if (target > nums[mid] && nums[right] > target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      left++;
    }
  }
  return false;
};

console.log(optimalSolution([0, 0, 1, 1, 2, 0], 2));

