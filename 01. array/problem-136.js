var singleNumber = function (nums = []) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }
  const rsltIndx = Object.values(obj).findIndex((v) => v === 1);
  const rslt = Object.keys(obj).find((_, ind) => ind === rsltIndx);
  return parseInt(rslt);
};

console.log(singleNumber([4, 1, 2, 1, 2]));

const singleNumberOptimal = (nums = []) => {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    res = res ^ element;
  }
  return res;
};

console.log(singleNumberOptimal([4, 1, 2, 1, 2]));

