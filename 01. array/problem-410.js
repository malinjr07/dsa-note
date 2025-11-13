const optimalSolution = (nums = [], k) => {
  if (k > nums.length) return -1;
  let left = Math.max(...nums),
    right = nums.reduce((sum, integer) => (sum += integer), 0);

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    let countSubArr = 1,
      sum = 0;
    for (const element of nums) {
      sum += element;
      if (sum > mid) {
        countSubArr++;
        sum = element;
      }
    }
    if (countSubArr <= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(optimalSolution([7, 2, 5, 10, 8], 2));

