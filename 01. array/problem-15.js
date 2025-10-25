const bruteForce = (nums = []) => {
  const tripletSet = new Set();
  const kthSet = new Set();

  for (let left = 0; left < nums.length; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      const kthItem = -(nums[left] + nums[right]);
      if (kthSet.has(kthItem)) {
        const triplet = [nums[left], nums[right], kthItem].sort(
          (a, b) => a - b
        );
        tripletSet.add(triplet.toString());
      }
      kthSet.add(nums[right]);
    }
    kthSet.clear();
  }
  const output = [];
  for (const element of tripletSet) {
    const tripletStrArr = element.split(',');
    for (let i = 0; i < tripletStrArr.length; i++) {
      const element = parseInt(tripletStrArr[i]);
      tripletStrArr[i] = element;
    }
    output.push(tripletStrArr);
  }
  return output;
};

console.log(bruteForce([-1, 0, 1, 2, -1, -4]));

const OptimalSolution = (nums = []) => {
  const sortedInput = nums.sort((a, b) => a - b);
  const output = [];

  for (let left = 0; left < sortedInput.length; left++) {
    if (left > 0 && sortedInput[left] === sortedInput[left - 1]) {
      continue;
    }
    let right = left + 1,
      k = nums.length - 1;

    while (right < k) {
      const sum = sortedInput[left] + sortedInput[right] + sortedInput[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        right++;
      } else {
        output.push([sortedInput[left], sortedInput[right], sortedInput[k]]);
        right++;
        while (right < k && sortedInput[right] === sortedInput[right - 1]) {
          right++;
        }
      }
    }
  }
  return output;
};

console.log(OptimalSolution([-1, 0, 1, 2, -1, -4]));

