var removeElement = function (nums, val) {
  let k = nums.length;
  let i = 0;
  while (i < k) {
    if (nums[i] === val) {
      [nums[i], nums[k - 1]] = [nums[k - 1], nums[i]];
      k--;
    } else {
      i++;
    }
  }
  console.log(nums, k);
  return k;
};

removeElement([3, 2, 2, 3], 3);

