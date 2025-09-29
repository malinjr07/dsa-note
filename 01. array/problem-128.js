const longestConsecutive = function (nums = []) {
  const sortedArr = nums.sort((a, b) => a - b);
  let seq = 1;
  let result = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      seq += 1;
    } else if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      seq = 1;
    }
    result = Math.max(result, seq);
  }
  return result;
};

console.log(longestConsecutive([1, 0, 1, 2]));

const longestConsecutiveOptimal = function (nums = []) {
  const numSet = new Set(nums);
  let result = 0;

  for (const value of numSet) {
    if (!numSet.has(value - 1)) {
      let length = 1;
      while (numSet.has(value + length)) {
        length++;
      }
      result = Math.max(result, length);
    }
  }
  return result;
};

console.log(longestConsecutiveOptimal([1, 0, 1, 2]));

