var maxSubArray = function (nums) {
  let res = nums[0];
  let total = 0;

  for (let n of nums) {
    total += n;
    res = Math.max(res, total);
    if (total < 0) {
      total = 0;
    }
  }

  return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

