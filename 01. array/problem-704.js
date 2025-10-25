const bruteForce = (nums = []) => {};

console.log(bruteForce());

const optimalSolution = (nums = [], target) => {
  let leftIndex = 0,
    rightIndex = nums.length - 1;
  while (leftIndex <= rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid - 1;
    }
  }
  return -1;
};

console.log(optimalSolution([-1, 0, 3, 5, 9, 12], 9));

