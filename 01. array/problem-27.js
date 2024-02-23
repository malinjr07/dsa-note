/**
 * ### Remove Given Element ###
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things: Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums. Return k.
 * #### Thought Process ####
 * Initialize a pointer k to keep track of the current position where the next non-target element should be placed.
 * Iterate through the input array nums using a loop variable j.
 * At each iteration:
 * Check if the current element nums[j] is not equal to the target value val.
 * If it's not equal, swap the current element nums[j] with the element at position k. This effectively moves the non-target element to the position pointed by k.
 * Increment k to update the position where the next non-target element should be placed.
 * Continue this process until all elements in the array have been processed.
 * After the loop, the value of k represents the length of the resulting array with all occurrences of val removed.
 * Truncate the array nums to the length k using nums.length = k to remove any excess elements beyond the valid length.
 * Return both the length k
 */

var removeElementWithArrayLength = function (nums, val) {
  let k = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      [nums[k], nums[j]] = [nums[j], nums[k]];
      k++;
    }
  }

  nums.length = k;
  return k, nums;
};

console.log(removeElementWithArrayLength([0, 1, 2, 2, 3, 0, 4, 2], 2));

/**
 *
 * #### Though Process | Time: O(N) Space: O(1) ####
 * We will swap the targeted element with the last element of the array.
 * So, we will take two pointer, one will point the first index (i), another will point the last index (j).
 * We will loop the array until i meets j.
 * On each iteration, we will check if the current i element is our targeted value or not.
 * If the current element is our targeted element, we will swap the current element with the j-indexed element.
 * As the swap is done, the current j will have the targeted value.
 * So, we move the j to it's left index.
 * If we don't find match, we will increase the i to it's next index.
 * That way, the i will also help us to determine the length of the output array
 * Because, i is representing the unmatched value's index. Once the loop is complete, post i-th elements will be our targeted elements.
 * So, truncating the array from i-th position will eventually remove the targeted values from the input array
 *
 */

var removeElementWithTwoPointer = function (nums, val) {
  let j = nums.length - 1;
  let i = 0;
  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j--];
    } else {
      i++;
    }
  }
  nums.length = i;
  return nums;
};

console.log(removeElementWithTwoPointer([3, 2, 2, 3], 3));
