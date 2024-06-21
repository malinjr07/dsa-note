/**
 * # Remove Duplicates from Sorted Array II #
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same. Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements. Return k after placing the final result in the first k slots of nums. Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 * ## Thought Process ##
 * We can utilize the two pointer approach. One will base pointer, another will compare pointer. If the distance between these two are more than two, then that mean we have more than two occurrence of the same value. So, after two occurrence, we will update from the third occurrence and keep updating until all occurrence are removed. Then, we move to the next value. And we keep track of this minimum two matching occurrence.
 * ## Solution | Time: O(N) Space: O(1) ##
 * We will have two pointer. One will the basePointer, another will be streak counting pointer. for each value, we will count the streak and we will update the basePointer with the minimum value between streak count and 2. we are taking the minimum, because we might get streak count 1, which mean there might be one element of a specific value. In that case, we don't want to update it, we will simply move forward.
 */

const removeDuplicatesII = function (nums) {
  let l = 0,
    r = 0;
  while (r < nums.length) {
    let count = 1; // It's obvious that the current value is minimum 1 time
    while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
      count++;
      r++;
    }
    for (let i = 0; i < Math.min(2, count); i++) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }
  nums.length = l;
  return nums;
};

console.log(removeDuplicatesII([1, 1, 1, 2, 2, 3]));

const removeDuplicates = (nums) => {
  let j = 0; // Initialize the pointer `j` to 0. This pointer will track the position in the array where the next valid element should be placed.

  for (let i = 0; i < nums.length; i++) {
    // Loop through each element in the array using the pointer `i`.
    if (nums[i] !== nums[i + 2]) {
      // Check if the current element `nums[i]` is not equal to the element two positions ahead `nums[i + 2]`.
      nums[j] = nums[i]; // If the condition is true, copy the current element `nums[i]` to the position `j` in the array.
      j++; // Increment `j` to move to the next position for the next valid element.
    }
  }
  nums.length = j;
  return j; // Return the value of `j`, which represents the length of the array after removing duplicates.
};

console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3]));

