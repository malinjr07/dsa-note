var removeDuplicates = function (nums) {
  let basePointer = 0;
  console.log('basePointer:', basePointer);
  let comparePointer = basePointer + 1;
  console.log('comparePointer:', comparePointer);
  while (comparePointer < nums.length) {
    if (nums[basePointer] === nums[comparePointer]) {
      if (comparePointer - basePointer > 1) {
        nums.splice(comparePointer, 1);
        comparePointer = basePointer + 1;
      } else {
        comparePointer++;
      }
    } else {
      basePointer = comparePointer;
      comparePointer = basePointer + 1;
    }
  }
  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
