const bruteForce = (nums1 = [], nums2 = []) => {
  let i = nums1.length - 1,
    j = nums2.length - 1,
    k = i + j + 1,
    tempArr = new Array(i + j + 2).fill(0);

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      tempArr[k--] = nums1[i--];
    } else {
      tempArr[k--] = nums2[j--];
    }
  }

  while (i >= 0) {
    tempArr[k--] = nums1[i--];
  }
  while (j >= 0) {
    tempArr[k--] = nums2[j--];
  }
  if (tempArr.length % 2 === 0) {
    const midIndx = Math.floor(tempArr.length / 2);
    return (tempArr[midIndx] + tempArr[midIndx - 1]) / 2;
  } else {
    return tempArr[Math.floor(tempArr.length / 2)];
  }
};

console.log(bruteForce([1, 3], [2]));
console.log(bruteForce([1, 2], [3, 4]));
console.log(
  bruteForce([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
);

const optimalSolution = (nums = []) => {};

console.log(optimalSolution());

