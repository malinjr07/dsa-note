const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const threeSum = nums[i] + nums[l] + nums[r];

      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);

        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, 2]));
