var majorityEl = function (nums) {
  let countObj = {};
  let maxCount = 0;
  let majorNumber = nums[0];

  for (let i of nums) {
    if (countObj[i]) {
      countObj[i] += 1;
      if (countObj[i] > maxCount) {
        maxCount = countObj[i];
        majorNumber = i;
      }
    } else {
      countObj[i] = 1;
    }
  }
  return majorNumber;
};

console.log(majorityEl([6, 5, 5]));

function majorityElement(nums) {
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([5, 5, 5, 5, 5, 6, 6, 7, 6, 7]));
