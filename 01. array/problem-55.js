/**
 * ### Jump Game ###
 * given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * #### Thought Process ####
 * We will take a variable to keep track of the maximum jump we can make.
 * We will iterate through the array.
 * On each iteration, we will update the maximum jump we can make.
 * And check if the maximum jump is greater than or equal to the target index.
 * If the current value is 0, we cannot jump forward.
 * But their might be a way to jump further from the previous index.
 * If the maximum jump count is greater than the current index, we can jump further.
 */
const canJump = (nums) => {
  let target = nums.length - 1,
    max = 0;

  for (let i = 0; i <= target; i++) {
    max = Math.max(max, i + nums[i]);
    if (max >= target) {
      return true;
    }

    if (max <= i && nums[i] === 0) {
      return false;
    }
  }
};

console.log(canJump([3, 2, 1, 0, 4]));

const canJumpII = (nums) => {
  let target = nums.length - 1;

  for (let i = target; i >= 0; i--) {
    if (i + nums[i] >= target) {
      target = i;
    }
  }
  return target === 0;
};

console.log(canJumpII([3, 2, 1, 0, 4]));

