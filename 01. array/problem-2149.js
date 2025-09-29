const rearrangeArray = (nums) => {
  // n is the length of the array. The array is modified in place.
  const n = nums.length;
  let i = 0;

  // Loop through the array index by index
  while (i < n) {
    const currentElement = nums[i];

    // --- Condition 1: Even index (0, 2, 4...) should be positive but is negative ---
    if (i % 2 === 0 && currentElement < 0) {
      // Find the NEXT positive integer from the rest of the array (starting at i + 1)
      let nextPositiveIndex = -1;
      let positiveValue = null;

      for (let j = i + 1; j < n; j++) {
        if (nums[j] > 0) {
          nextPositiveIndex = j;
          positiveValue = nums[j];
          break; // Found the first positive, stop search
        }
      }

      // 1. Remove the positive number from its original position
      // NOTE: nums.splice(nextPositiveIndex, 1) shifts all subsequent elements. (O(n))
      nums.splice(nextPositiveIndex, 1);

      // 2. Insert the positive number at the current index i
      // NOTE: nums.splice(i, 0, positiveValue) shifts all subsequent elements again. (O(n))
      nums.splice(i, 0, positiveValue);

      // The element at 'i' is now correct (positive), so we can move to the next index.
      i++;
    }
    // --- Condition 2: Odd index (1, 3, 5...) should be negative but is positive ---
    else if (i % 2 !== 0 && currentElement > 0) {
      // Find the NEXT negative integer from the rest of the array (starting at i + 1)
      let nextNegativeIndex = -1;
      let negativeValue = null;

      for (let j = i + 1; j < n; j++) {
        if (nums[j] < 0) {
          nextNegativeIndex = j;
          negativeValue = nums[j];
          break; // Found the first negative, stop search
        }
      }

      // 1. Remove the negative number from its original position (O(n))
      nums.splice(nextNegativeIndex, 1);

      // 2. Insert the negative number at the current index i (O(n))
      nums.splice(i, 0, negativeValue);

      // The element at 'i' is now correct (negative), so we can move to the next index.
      i++;
    }
    // --- Condition 3: The element is already correct ---
    else {
      // The element at the current index is correct, so we just continue.
      i++;
    }
  }

  return nums;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));

const rearrangeArrayOptimal = (nums = []) => {
  const n = nums.length;
  const newArray = new Array(n);

  let posIndex = 0;
  let negIndex = 1;

  for (let i = 0; i < n; i++) {
    const currentElement = nums[i];

    if (currentElement > 0) {
      newArray[posIndex] = currentElement;
      posIndex += 2;
    } else {
      newArray[negIndex] = currentElement;
      negIndex += 2;
    }
  }

  return newArray;
};

console.log(
  rearrangeArrayOptimal([
    28, -41, 22, -8, -37, 46, 35, -9, 18, -6, 19, -26, -37, -10, -9, 15, 14, 31,
  ])
);

const rearrangeArrayBetterOptimal = (nums = []) => {
  const n = nums.length;

  const positives = [];
  const negatives = [];

  for (const num of nums) {
    if (num > 0) {
      positives.push(num);
    } else {
      negatives.push(num);
    }
  }

  const newArray = new Array(n);
  let positiveIndex = 0;
  let negativeIndex = 0;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      newArray[i] = positives[positiveIndex];
      positiveIndex++;
    } else {
      newArray[i] = negatives[negativeIndex];
      negativeIndex++;
    }
  }

  return newArray;
};

console.log(
  rearrangeArrayBetterOptimal([
    28, -41, 22, -8, -37, 46, 35, -9, 18, -6, 19, -26, -37, -10, -9, 15, 14, 31,
  ])
);

