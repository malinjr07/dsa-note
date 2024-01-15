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
 * Optimal Solution
 * Two Pointer Solution
 * One Pointer is the index of the smallest value
 * One Pointer is the index of the largest value
 * By default, the first index will be the smallest value, and the last index will be the largest value
 * So, initially, the smallest value pointer will be 0
 * and, the largest value pointer will be the last index
 *Then, we traverse through the array
 */
