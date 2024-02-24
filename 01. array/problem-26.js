/**
 * ### Remove Duplicate from Sorted Array ###
 * #### Thought Process | Time: O(N) Space: O(N) ####
 * Two Pointer Approach. One pointer is BaseIndex, another is Iteration index (i)
 * Both Pointer will start at the 2nd index.
 * The baseIndex will update according to the iteration index only if the previous iteration index is not duplicate of the iteration index.
 * We will replace the baseIndex value with current iteration value and we will increment the baseIndex
 * That way, we keep updating the baseIndex with non-repeating values. Also, the baseIndex will be representing the length of non-repeating array
 * Finally, truncating the array will remove all the repeating values from the end.
 */

var removeDuplicatesI = function (nums) {
  let rslt = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[rslt] = nums[i];
      rslt++;
    }
  }
  nums.length = rslt;
  return nums;
};
console.log(removeDuplicatesI([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
