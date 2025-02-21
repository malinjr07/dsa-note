var jump = function (nums) {
  let i = 0;
  let jumpCount = 0;
  while (i < nums.length - 1) {
    if (nums[i] === 0) {
      return undefined;
    }
    if (nums[i] >= nums.length - 1) {
      return (jumpCount += 1);
    }
    let maxValueIndx = i + 1;
    let maxValue = nums[maxValueIndx];
    for (let j = maxValueIndx + 1; j <= nums[i]; j++) {
      maxValue = Math.max(nums[maxValueIndx], nums[j]);
      if (maxValue === nums[j]) {
        maxValueIndx = j;
      }
    }
    i += maxValueIndx;
    jumpCount++;
  }
  console.log(jumpCount);
  return jumpCount;
};

jump([[1, 1, 1, 1]]);

