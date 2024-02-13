var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = nums1.length - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  console.log(' j loop triggered', j);
  while (j >= 0) {
    console.log(' j loop triggered', j);
    nums1[k] = nums2[j];
    k--;
    j--;
  }

  console.log(' i loop triggered', i);
  while (i >= 0) {
    console.log(' i loop triggered', i);
    nums1[k] = nums1[i];
    k--;
    i--;
  }
  console.log(nums1);
};

// console.log(merge([1, 3, 5, 0, 0, 0], 3, [2, 4, 6], 3));
console.log(merge([2, 4, 6, 0, 0, 0], 3, [1, 3, 5], 3));
// console.log(merge([1, 4, 0, 0, 0, 0, 0], 2, [1, 3, 5, 8], 4));
