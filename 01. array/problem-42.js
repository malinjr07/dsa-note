var trap = function (height) {
  const leftArr = new Array(height.length).fill(0);
  const rightArr = new Array(height.length).fill(0);
  let leftArrMaxheight = 0;
  let rightArrMaxheight = 0;
  let rslt = 0;
  for (let i = 0; i < height.length; i++) {
    leftArrMaxheight = Math.max(leftArrMaxheight, height[i]);
    leftArr[i] = leftArrMaxheight;
  }
  for (let i = height.length - 1; i >= 0; i--) {
    rightArrMaxheight = Math.max(rightArrMaxheight, height[i]);
    rightArr[i] = rightArrMaxheight;
  }
  for (let i = 0; i < height.length; i++) {
    rslt += Math.min(leftArr[i], rightArr[i]) - height[i];
  }
  return rslt;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
