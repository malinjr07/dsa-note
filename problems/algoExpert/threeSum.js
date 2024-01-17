function threeNumberSum(array, targetSum) {
  // Write your code here.
  /**
   * There is a possibility of empty array
   */

  array.sort((a, b) => a - b);
  if (!array.length || array[0] >= targetSum) {
    return [];
  }
  const res = [];
  for (let index = 0; index < array.length; index++) {
    const currentElement = array[index];
    let leftIndex = index + 1;
    let rightIndex = array.length - 1;
    loop2: while (leftIndex < rightIndex) {
      const calculatedSum =
        currentElement + array[leftIndex] + array[rightIndex];
      if (calculatedSum === targetSum) {
        res.push([currentElement, array[leftIndex], array[rightIndex]]);
        rightIndex--;
        leftIndex++;
      } else if (calculatedSum > targetSum) {
        rightIndex--;
      } else {
        leftIndex++;
      }
    }
  }
  console.log(res);
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
