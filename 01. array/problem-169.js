/**
 * # Majority Element #
 * Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * ## Thought Process | Time O(N) Space O(N) ##
 * We will take an object (HashMap) and keep adding the value as key and the number of occurance as value. Also, we will keep track of the number of maximum occurance in one variable and the value that is correspondent with that number in another value.
 * We will iterate throughout the array. On each iteration, we will check if the value exist in the object or not. If it exist, we will increase its count and then we will check if the count of current element is greater than the current maxCount. If it's greater, we will update the maxCount and the Major Number as well. If the value doesn't exist in the object, we will create a property with default value of 1. Finally, we we will return the Major Number
 */

var majorityEl = function (nums) {
  let countObj = {};
  let maxCount = 0;
  let majorNumber = nums[0];

  for (let i of nums) {
    if (countObj[i]) {
      countObj[i] += 1;
      if (countObj[i] > maxCount) {
        maxCount = countObj[i];
        majorNumber = i;
      }
    } else {
      countObj[i] = 1;
    }
  }
  return majorNumber;
};

console.log(majorityEl([6, 5, 5]));

/**
 * ### Optimal Solution | Time O(N) Space O(1) ###
 * We need one major number, which happen to be have maximum occurance. So, if one number has 4 occurance, where another has 5 occurance, the 5 occurance will have the majority. So, to determine the majority, we can take two pointer, one will point at the element while other will count the element's majority. We will traverse the element and check if the current element is matching with our major element or not. If it matches, we will increase the count. If it doesn't match, we will decrease the count. If, for any reason, the count of the current major element hits the 0, that mean there is another element with equal number of quantity. So, we will update the count value to our current iterating value
 */

function majorityElement(nums) {
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([5, 5, 5, 5, 5, 6, 6, 7, 6, 7]));
