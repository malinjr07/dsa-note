/**
 * # Rotate Array #
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 * ## Brute Force Solution | Time O(N) Space O(N) ##
 * We will take another array with same size. We will loop the input array and each element will be shifted to the right by K input time. We will Get Remainder of K out of input array length because the last k elements will be shifted to the starting of the index. So, our targeted index always will be i+k % nums.length
 */

var rotateBruteForce = function (nums, k) {
  if (k === 0) return nums;
  const newArr = new Array(nums.length).fill(0);
  for (let key = 0; key < nums.length; key++) {
    let targetedIndex;
    targetedIndex = (key + k) % nums.length;
    newArr[targetedIndex] = nums[key];
  }
  nums = newArr;
  return nums;
};

console.log(rotateBruteForce([1, 2, 3, 4, 5, 6, 7], 3));

/**
 * ## Optimal Solution | Time: O(N) Space: O(1) ##
 * We can create a handler function or use such built-in function, that reverses the array between a specific range, in-place.
 * We will still try to figure out the rotation value by modulus the K input. Because, our K input might be larger than the array's length.
 */

var rotateOptimal = function (nums, k) {
  if (k === 0) return nums;
  let rotations = k % nums.length;

  const reverseArr = (startingIndex, endingIndex) => {
    while (startingIndex < endingIndex) {
      [nums[startingIndex], nums[endingIndex]] = [
        nums[endingIndex],
        nums[startingIndex],
      ];
      startingIndex++;
      endingIndex--;
    }
  };

  nums.reverse();
  reverseArr(0, rotations - 1);
  reverseArr(rotations, nums.length - 1);

  return nums;
};
console.log(rotateOptimal([1, 2, 3, 4, 5, 6, 7], 3));
