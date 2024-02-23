/**
 * Merge Sorted Array
 * ### Question ###
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. The First Array will have empty Indexes at the end, to fill the second array
 * ### Thought Process: ###
 * #### Two Pointer Approach: Time O(m+n) Space O(1) ####
 * If the second array is empty, then there is nothing to append. We can break out of the function instantly
 * Both Array will have the largest value at the end.
 * And, the final array will also be a non-decreasing sorted array.
 * So, We will Loop the first array from last index (Reverse Loop)
 * On each iteration, we will compare the last element of two array and look for the larger value
 * The largest one will be added at the end and the corresponding index will move left
 * Once the Loop is complete, We might have left over in either of the two input array
 * So, we will conduct two loop, one will be for the first array, another for the second array
 * Whatever Leftover we might have in any input array, we will add those into output array
 */

const mergeTwoPointer = (nums1, m, nums2, n) => {
  if (n === 0) return nums1;
  let j = m - 1;
  let k = n - 1;
  let l = nums1.length - 1;
  while (j >= 0 && k >= 0) {
    if (nums1[j] > nums2[k]) {
      nums1[l--] = nums1[j--];
    } else {
      nums1[l--] = nums2[k--];
    }
  }
  while (j >= 0) {
    nums1[l--] = nums1[j--];
  }
  while (k >= 0) {
    nums1[l--] = nums2[k--];
  }

  return nums1;
};

console.log(mergeTwoPointer([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

/**
 * #### Append then Sort | Time Complexity O(M+N * log(M+N)) Space Complexity: O(1) ####
 * Traverse the Second array from the first index and the first array from the given element length index
 * keep appending the second array's values in the first array
 * Sort the first array
 */

const mergeSort = (nums1, m, nums2, n) => {
  if (n === 0) return nums1;
  for (let j = 0, i = m; j < n; j++, i++) {
    nums1[i] = nums2[j];
  }
  return nums1.sort((a, b) => a - b);
};

console.log(mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
