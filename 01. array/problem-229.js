const bruteForce = (nums = []) => {
  const obj = {};
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }

  Object.entries(obj).forEach((element) => {
    const key = element[0];
    const value = element[1];
    if (value > Math.floor(nums.length / 3)) {
      res.push(parseInt(key));
    }
  });
  return res;
};

console.log(bruteForce([3, 2, 3]));

