/**
 * # Better Solution
 * Using the concept of Sliding Window with creating a new temporary array that is a concatenated version of the input array
 */
const checkBetter = (nums = []) => {
  const n = nums.length;
  let orderCount = 1;
  const array = [...nums, ...nums];
  let res = false;

  for (let index = 1; index < array.length; index++) {
    if (array[index] >= array[index - 1]) {
      orderCount++;
    } else {
      orderCount = 1;
    }
    if (orderCount === n) res = true;
  }
  return res;
};

console.log(checkBetter([3, 4, 5, 1, 2]));

/**
 * # Optimal Solution
 * Instead of taking a new array, we can simply traverse twice longer than the input array.
 */

const checkOptimal = (nums = []) => {
  const n = nums.length;
  let count = 1;
  for (let i = 1; i < n * 2; i++) {
    if (nums[(i - 1) % n] <= nums[i % n]) {
      count++;
    } else {
      count = 1;
    }
    if (count === n) return true;
  }
  return false;
};

console.log(checkOptimal([3, 4, 5, 1, 2]));

