/**
 * # Brute Force Solution
 *
 */

const moveZerosBrute = (nums = []) => {
  let currentZero = nums.length - 1;

  for (let i = currentZero; i >= 0; i--) {
    if (nums[i] === 0) {
      let j = i;
      while (j < currentZero) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        j++;
      }
      currentZero--;
    }
  }
  return nums;
};

console.log(moveZerosBrute([0, 1, 0, 3, 12]));

const moveZeroOptimal = (nums = []) => {
  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
};

console.log(moveZeroOptimal([0, 1, 0, 3, 12]));

