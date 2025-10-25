const bruteForce = (nums = []) => {
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    const anchor = nums[i];
    for (let j = i - 1; j >= 0; j--) {
      const element = nums[j];
      if (element < anchor) {
        count++;
      }
    }
  }
  return count;
};

console.log(bruteForce([1, 2, 3, 4, 5]));

