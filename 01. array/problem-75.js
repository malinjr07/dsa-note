var sortColors = function (nums = []) {
  if (nums.length === 1) return nums;
  let left = 0;

  for (let i = 0; i < 3; i++) {
    for (let right = 0; right < nums.length; right++) {
      if (nums[right] === i) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

