var sortedSquares = function (nums) {
  let smallestIndex = 0;
  let largestIndex = nums.length - 1;
  let finalArr = new Array(nums.length).fill(0);
  for (let index = nums.length - 1; index >= 0; index--) {
    const smallestSquared = nums[smallestIndex] ** 2;
    const largestSquared = nums[largestIndex] ** 2;
    if (smallestSquared > largestSquared) {
      finalArr[index] = smallestSquared;
      smallestIndex++;
    } else {
      finalArr[index] = largestSquared;
      largestIndex--;
    }
  }
  return finalArr;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
