var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;
  let i = nums1.length - 1;
  let j = m - 1;
  let k = n - 1;
  while (j >= 0 && k >= 0) {
    if (nums1[j] > nums2[k]) {
      nums1[i] = nums1[j];
      j--;
    } else {
      nums1[i] = nums2[k];
      k--;
    }
    i--;
  }
  while (j >= 0) {
    nums1[i] = nums1[j];
    j--;
    i--;
  }
  while (k >= 0) {
    nums1[i] = nums2[k];
    j--;
    i--;
  }
  console.log(nums1);
};

merge([0], 0, [1], 1);

