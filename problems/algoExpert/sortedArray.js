/**
 * Brute Force Solution
 * Traverse the whole array
 * square each value
 * sort the squared array
 */

function bruteSquared(array = []) {
  const squaredArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    squaredArray.push(element * element);
  }
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}

/**
 * # Optimal Solution
 * ## Two Pointer Solution
 * - One Pointer is the index of the smallest value
 * - One Pointer is the index of the largest value
 * - By default, the first index will be the smallest value, and the last index will be the largest value
 * - So, initially, the smallest value pointer will be 0
 * - and, the largest value pointer will be the last index
 * - Then, we traverse through the array
 * - As, the Array element can be negative value, the square of the smallest negative integer might be the largest squared integer
 * - That's why, on each iteration, we will take two variable that will have the squared value of the smallest and the largest value of the array
 * - If we find the square value of the smallest element becomes larger than the squared element of the large value,
 * then we will add the squared value of the smallest element on the respective index of the squared array.
 * And, we will move the smallest index to its next index
 * Otherwise, If we find the square value of the smallest element is smaller than the square value of the larger element,
 * the squared value of the larger element will be add on the corresponding index of the squared array.
 *
 */

function sortedSquaredArray(array) {
  // Write your code here.
  const finalArr = new Array(array.length).fill(0);
  let smallerIndex = 0;
  let largerIndex = array.length - 1;

  for (let index = array.length - 1; index >= 0; index--) {
    const smallerValueSquared = array[smallerIndex] ** 2;

    const largerValueSquared = array[largerIndex] ** 2;

    if (smallerValueSquared > largerValueSquared) {
      finalArr[index] = smallerValueSquared;
      smallerIndex++;
    } else {
      finalArr[index] = largerValueSquared;
      largerIndex--;
    }
  }
  return console.log(finalArr);
}

sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]);
