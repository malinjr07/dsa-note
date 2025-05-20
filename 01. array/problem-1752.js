const check = (nums = []) => {
  if (nums.length < 2) {
    return true;
  }
  const isSorted = isSorted(nums);
  if (isSorted) {
    return isSorted;
  }

  const tempArr = [...nums];

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {}
  }
};

const isSorted = (nums = []) => {
  let sorted = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      sorted = true;
    } else {
      sorted = false;
      break;
    }
  }
  return sorted;
};

