var findMaxConsecutiveOnes = function (nums = []) {
  let currentCount = 0,
    maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === 1) {
      currentCount += 1;
      maxCount = Math.max(currentCount, maxCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

