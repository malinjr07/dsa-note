const bruteForce = (nums = []) => {
  let leader = nums[nums.length - 1];

  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i];
    if (element >= leader) {
      leader = Math.max(leader, element);
      console.log(leader);
    }
  }
};

console.log(bruteForce([10, 22, 12, 3, 0, 6]));

