/**
 * Two Sum Problem
 */

/**
 * First Approach: Using Set/Array
 * The Process is, we will create an array or set,
 * and keep adding the numbers from beginning until we find the complimentary number of one of our traversed index
 * the principle is, we will move forward, while checking if we have the compliment number exist in one of the previous element of the array
 * To do that, we will keep adding the number to an array or set if that number's compliment number isn't already exist
 * Once we find a match, that one of the number's complimentary number was previously added into our set or array...
 * then we can come up to the solution that both of the number exist in the array/set
 * The Approach is, First we are calculating the compliment Number;
 * Then Checking when we are on a specific number, the compliment number is whether already exist in the array or not
 * If we find the compliment number, then it means the number and the compliment number both exist in our argument array
 * If not, we will add the number in our new array and move forward.
 * That way, we will keep moving forward and keep seeing whether one of the previous number is the complimentary number or not
 */
function twoNumberSumWithArray(array, targetSum) {
  // Write your code here.
  const traversed = new Array();
  for (let num of array) {
    const compliment = targetSum - num;
    if (traversed.includes(compliment)) {
      return [num, compliment];
    } else {
      traversed.add(num);
    }
  }
  return [];
}

/**
 * Second Approach: Using Object/Hash Table
 * It is exact same as the first approach
 * The Difference is, instead of array or set, we will use Object or Hash Table here
 * For each number "M", we will keep calculating the other number "N" and keep searching if the "N" exist in the Object or not;
 * If the "N" exist, then we can complete the function with results of "M" & "N"
 * If the "N" doesn't exist, then we can keep adding the "M" as key of a property, while the value of "M" will be true
 */

function twoNumberSumWithObject(array, targetSum) {
  // Write your code here.
  const obj = {};

  for (let num of array) {
    let otherNumber = targetSum - num;
    if (otherNumber in obj) {
      return [num, otherNumber];
    } else {
      obj[num] = true;
    }
  }
  return [];
}

/**
 * Third Approach is: Sorting and Two pointer
 * First, we will sort the parameter array
 * Both Ascending and Descending will work
 * For this scenario, let's use the ascending sorting
 * We will sort the array, then we will take two pointer
 * One at the beginning of the sorted array, another at the end of the sorted array
 * the beginning pointer will point to the smallest element of the array, while the ending pointer will be the largest pointer of the array
 * We will keep iterating the loop, until the smallest pointer gets equal or higher than the largest pointer or vice versa
 * on each iteration, we will sum up both pointer and find whether the result is equal to the targetSum or not
 * If we find match, then both of the pointer is our result
 * If our calculated sum is smaller than the targetSum, then we need to move the smallest pointer forward (It'll increase the calculated Sum on next iteration)
 * If our Calculated sum is bigger than the targetSum, then we need to move the largestPointer backward (It'll decrease the calculated sum on the next iteration)
 */

function twoNumberSumWithTwoPointer(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
