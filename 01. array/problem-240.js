const betterSolution = (matrix = [[]], target) => {
  if (target < matrix[0][0] || target > matrix.at(-1).at(-1)) return false;

  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];

    let left = 0,
      right = arr.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
};

console.log(
  betterSolution(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);

const optimalSolution = (matrix = [[]], target) => {
  if (target < matrix[0][0] || target > matrix.at(-1).at(-1)) return false;
  let left = 0,
    top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    const mid = matrix[top][right];
    if (mid === target) {
      return true;
    } else if (mid > target) {
      right--;
    } else {
      top++;
    }
  }

  return false;
};

console.log(
  optimalSolution(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    27
  )
);

