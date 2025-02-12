/**
 * # 26. Remove Duplicates from Sorted Array
 * The requirement is to compare two adjacent element of non-decreasing array aka array of increasing with possibility of duplicate elements and check if both are duplicate. If duplicate, remove it. Return the number of unique element in the array while having those unique elements on the starting of the array
 * ## Thought Process
 * ### Two Pointer Approach
 * So, eventually, the first element is unique. we need to compare if the second element is duplicate of its previous element.
 * Two pointer will take place:
 * - One for Iteration (the `r` variable);
 * - Another to keep track of the duplicate occurrence and to remove the duplicate element to keep the unique elements in decreasing manner (the `l` variable);
 *
 * Both pointer will start from the second element.\
 * The `r` pointer will keep iterating through the **Input** array.\
 * If the previous element of current `r` pointer is equal to the element of the current `r` pointer, then we will do nothing but move forward to the next element.\
 * Once we find an element which is not equal to its previous element, we will update the `l` pointer.\
 * Once we have updated the `l` pointer, we will increase the `l` pointer by 1 to add the next unique element.\
 * Once the traverse is completed, we will return the `l`. Because it'll be 1 value larger than the index of the unique element. Which means, at the end, the `l` will represent the length of the array with unique elements.
 *
 * @param {integer[]} nums
 * @returns integer
 *
 */

var removeDuplicates = function (nums) {
  let l = 1;

  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r];
      l++;
    }
  }
  console.log(nums);
  console.log(l);

  return l;
};

removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4]);

