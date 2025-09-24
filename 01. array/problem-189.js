/**
 * # Brute Force Approach
 * We will iterate till K. On each iteration, we will pop out the last element and unshift that element at the beginning of the array
 */

const rotate = (nums = [], k) => {
  for (let i = 0; i < k; i++) {
    const lastElement = nums.pop();
    nums.unshift(lastElement);
  }
  return nums;
};

console.log('rotate', rotate([1, 2, 3, 4, 5, 6, 7], 3));

/**
 * # Brute Force Approach 2.0
 * We will create a new array with the Size of Input array. Then we will traverse Through the input array. On each transversal, We will update the newly created array With the value of current element On `` (i+k)%nums.length `` Position.
 */

const rotate2 = (nums = [], k) => {
  const n = nums.length;
  const newArray = new Array(n);
  for (let i = 0; i < nums.length; i++) {
    newArray[(i + k) % n] = nums[i];
  }
  return newArray;
};

console.log('rotate 2', rotate2([1, 2, 3, 4, 5, 6, 7], 3));

const rotateOptimal = (nums = [], k) => {
  const reversal = (startIndx, lastIndx) => {
    while (startIndx < lastIndx) {
      [nums[startIndx], nums[lastIndx]] = [nums[lastIndx], nums[startIndx]];
      startIndx++;
      lastIndx--;
    }
  };
  k = k % nums.length;
  reversal(0, nums.length - 1);
  reversal(0, k - 1);
  reversal(k, nums.length - 1);

  return nums;
};

console.log('rotateOptimal', rotateOptimal([1, 2], 7));

