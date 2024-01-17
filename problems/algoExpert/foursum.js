function fourNumberSum(array, targetSum) {
  // Write your code here.
  let obj = {};
  const res = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      const currentSum = array[i] + array[j];
      if (currentSum in obj) {
        obj[currentSum].push([array[j], array[i]]);
      } else {
        obj[currentSum] = [array[j], array[i]];
      }
    }

    for (let k = i + 1; k < array.length; k++) {
      const currentSum = array[i] + array[k];
      const difference = targetSum - currentSum;
      if (difference in obj) {
        for (let pair of obj[difference]) {
          res.push(pair.concat([array[i], array[k]]));
        }
      }
    }
  }

  return res;
}

fourNumberSum([7, 6, 4, -1, 1, 2], 16);
