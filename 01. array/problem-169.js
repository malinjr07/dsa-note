const majorityElement = (nums = []) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }

  const majorElement = Object.entries(obj).reduce(
    (acc, [key, value]) => {
      const [maxKey, maxValue] = acc;
      return value > maxValue ? [key, value] : acc;
    },
    ['', -Infinity]
  )[0];
  return parseInt(majorElement);
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

const majorityOptimal = (nums = []) => {
  let res = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (res === element) {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      res = element;
      count = 1;
    }
  }
  return res;
};

console.log(majorityOptimal([2, 2, 1, 1, 1, 2, 2]));

