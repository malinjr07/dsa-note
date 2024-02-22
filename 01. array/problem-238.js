var productExceptSelf = function (nums) {
  const n = nums.length - 1;
  let prefix = 1,
    postfix = 1;
  const rslt = new Array(n + 1).fill();

  for (let i = 0; i <= n; i++) {
    rslt[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = n; i >= 0; i--) {
    rslt[i] *= postfix;
    postfix *= nums[i];
  }
  return rslt;
};

console.log(productExceptSelf([1, 2, 3, 4]));
