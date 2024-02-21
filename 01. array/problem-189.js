var rotate = function (nums, k) {
  if (k === 0) return nums;
  let rotations = k % nums.length;
  let tempArr = nums.splice(nums.length - rotations, rotations);
  console.log('tempArr:', tempArr);
  nums.unshift(...tempArr);
  console.log('nums:', nums);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
