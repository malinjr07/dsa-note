function fourNumberSum(array, targetSum) {
  // Write your code here.

  /**
   * This Object will store pairs of integer as each items property and the sum of those pairs as key
   * On each pair, we will check whether there is such pair exist in the object that sums up to the targetSum in total
   * If such pair already exist, we will be able to create such quadruplets that matches the target sum
   * In Short, we are creating object for two sums.
   * Once the sum matches, we will create quadruplets of each pairs of pairs.
   */

  let pairObj = {};
  let result = [];
  const bound = array.length;
  for (let index = 1; index < bound - 1; index++) {
    for (let nextIndex = index + 1; nextIndex < bound; nextIndex++) {
      const calculatedSum = array[index] + array[nextIndex];
      const difference = targetSum - calculatedSum;
      /**
       * The CalculatedSum Consist a pair
       * If we find another pair in our object, that means we have got two sets of pairs that can create our quadruplets
       */
      if (difference in pairObj) {
        for (let pair of pairObj[difference]) {
          result.push(pair.concat([array[index], array[nextIndex]]));
        }
      }
    }
    /**
     * On Each Iteration, we will create pairs with the current element and previous elements of current element,
     * and we will create properties in the object
     * If the property already exist in the object,
     * we will append the pair with the existing pair
     */
    for (let prevIndex = 0; prevIndex < index; prevIndex++) {
      const sum = array[prevIndex] + array[index];
      if (sum in pairObj) {
        pairObj[sum].push([array[prevIndex], array[index]]);
      } else {
        pairObj[sum] = [[array[prevIndex], array[index]]];
      }
    }
  }

  return result;
}

fourNumberSum([7, 6, 4, -1, 1, 2], 16);
