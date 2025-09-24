const maxAscendingSum = function (nums) {
  let currentSum = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    if (element > nums[i - 1]) {
      currentSum += element;
    } else {
      currentSum = element;
    }
    res = Math.max(currentSum, res);
  }
  return res;
};

maxAscendingSum([10, 20, 30, 5, 10, 50]);

