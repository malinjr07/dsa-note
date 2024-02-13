var removeElement = function (nums, val) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[result] = nums[i];
      result++;
    }
  }
  console.log(nums);
  return result;
};

console.log(removeElement([3, 2, 2, 3], 3));
