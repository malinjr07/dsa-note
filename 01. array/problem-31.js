var nextPermutation = function (nums = []) {
  const n = nums.length - 1;
  let leastIndex = -1;

  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      leastIndex = i;
      break;
    }
  }

  if (leastIndex === -1) {
    return nums.reverse();
  } else {
    for (let i = n; i > leastIndex; i--) {
      if (nums[i] > nums[leastIndex]) {
        [nums[i], nums[leastIndex]] = [nums[leastIndex], nums[i]];
        break;
      }
    }
  }

  reverse(nums, leastIndex + 1, n);

  return nums;
};

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0]));

