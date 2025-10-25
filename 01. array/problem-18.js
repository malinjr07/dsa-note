const kSumTwoPointer = (nums = [], target) => {
  nums.sort((a, b) => a - b);
  const res = [];
  const quad = [];

  const helper = (k, start, currentSum) => {
    if (k === 2) {
      let left = start,
        right = nums.length - 1;
      while (left < right) {
        const count = nums[left] + nums[right];
        if (count < currentSum) {
          left++;
        } else if (count > currentSum) {
          right--;
        } else {
          res.push([...quad, nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        }
      }
      return;
    }
    for (let i = start; i < nums.length - k + 1; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      quad.push(nums[i]);
      helper(k - 1, i + 1, currentSum - nums[i]);
      quad.pop();
    }
  };

  helper(4, 0, target);
  return res;
};

console.log(kSumTwoPointer([1, 0, -1, 0, -2, 2], 0));

