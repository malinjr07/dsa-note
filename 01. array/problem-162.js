const optimalSolution = (nums = []) => {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else if (mid > 0 && nums[mid] < nums[mid - 1]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
};

console.log(optimalSolution([1, 2, 1, 3, 5, 6, 4]));

