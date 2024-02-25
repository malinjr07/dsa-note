const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const count = nums[left] + nums[right] + nums[i];
      if (count > 0) {
        right--;
      } else if (count < 0) {
        left++;
      } else {
        result.push([nums[left], nums[right], nums[i]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
