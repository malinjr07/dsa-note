const optimalSolution = (nums = [], threshold) => {
  let res = Math.max(...nums),
    left = 1,
    right = Math.max(...nums);
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    let sum = 0;

    for (const element of nums) {
      sum += Math.ceil(element / mid);
    }
    if (sum <= threshold) {
      res = Math.min(mid, res);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res;
};

console.log(optimalSolution([1, 2, 5, 9], 6));

