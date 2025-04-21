const countSort = (nums) => {
  // Get the least value for sorting the nums with negative value
  const minValue = Math.abs(Math.min(...nums));
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + minValue;
  }
  // maxValue to create a temporary array
  const maxValue = Math.max(...nums);
  const tempArr = new Array(maxValue);
  for (let i = 0; i < nums.length; i++) {
    const index = nums[i];
    if (!tempArr[index]) {
      tempArr[index] = 0;
    }
    tempArr[index] += 1;
  }
  let index = 0;
  for (let i = 0; i < tempArr.length; i++) {
    while (tempArr[i] > 0) {
      nums[index++] = i;
      tempArr[i]--;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] - minValue;
  }
};

const nums = [8, 20, -4, 6, -2];
countSort(nums);
console.log(nums);

