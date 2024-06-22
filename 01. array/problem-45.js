/**
 * ### Jump Game II ###
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * You can assume that you can always reach the last index.
 * #### Thought Process ####
 * We will take a variable to count the total number of jumps we make to reach the goal.
 * The Concept is similar to the BFS traversal.
 * We will take two variables to keep track the range of the current jump.
 * The starting point of the range will be the next index of the ending point of the previous jump.
 * The ending point of the range will be the maximum jump we can make from the current jump.
 * We will iterate through the array.
 * On each iteration, we will calculate the maximum jump we can make from the current index.
 * Then, we update the range variables.
 * On each update, we will increase the jump count.
 * If the ending point of the range is greater than or equal to the target index, we will return the jump count.
 */
const jump = (nums) => {
  let count = 0,
    l = 0,
    r = 0;

  while (r < nums.length - 1) {
    let furthest = 0;
    for (let i = l; i < r + 1; i++) {
      furthest = Math.max(furthest, nums[i] + i);
    }
    l = r + 1;
    r = furthest;
    count++;
  }
  return count;
};

