const Optimal = (nums = [], k = 0) => {
  const hashMap = new Map();
  let sum = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    sum += element;
    if (sum === k) {
      count++;
    }
    const remain = sum - k;

    if (hashMap.get(remain)) {
      count++;
    }
    hashMap.set(sum, i);
  }

  return count;
};

console.log(Optimal([1, 1, 1], 2));

