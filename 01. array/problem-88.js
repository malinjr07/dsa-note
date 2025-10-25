const optimalPractice = (nums1 = [], m, nums2 = [], n) => {
  if (n === 0) return nums1;
  let i = m - 1;
  let j = n - 1;
  let k = nums1.length - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  return nums1;
};

console.log(optimalPractice([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

