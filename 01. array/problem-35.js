const bruteForce = (nums = []) => {};

console.log(bruteForce());

const optimalSolution = (nums = [], target) => {
  let leftIndex = 0,
    rightIndex = nums.length - 1,
    mid;
  while (leftIndex <= rightIndex) {
    mid = Math.floor((leftIndex + rightIndex) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid - 1;
    }
  }
  if (nums[mid] > target) {
    return mid;
  } else {
    return mid + 1;
  }
};

console.log(optimalSolution([1, 3, 5, 6], 7));

