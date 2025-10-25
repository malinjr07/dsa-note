const optimal2 = (nums = []) => {
  let mini, maxi, res;
  mini = maxi = res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const currMini = Math.min(num, num * maxi, num * mini);
    const currMaxi = Math.max(num, num * maxi, num * mini);
    maxi = currMaxi;
    mini = currMini;
    res = Math.max(res, maxi);
  }

  return res;
};

console.log(optimal2([2, 3, -2, 4]));

const optimalSolution = (nums = []) => {
  let count = 0,
    prefixProduct = 1,
    suffixProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    if (prefixProduct === 0) {
      prefixProduct = 1;
    }
    if (suffixProduct === 0) {
      suffixProduct = 1;
    }
    prefixProduct *= nums[i];
    suffixProduct *= nums[nums.length - 1 - i];
    count = Math.max(count, prefixProduct, suffixProduct);
  }
  return count;
};

console.log(optimalSolution([2, 3, -2, 4]));

