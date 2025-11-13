const bruteForce = (matrix = [[]], target) => {
  const tempArr = [];

  matrix.forEach((arr) => tempArr.push(...arr));

  let left = 0,
    right = tempArr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (tempArr[mid] === target) return true;
    if (tempArr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

/* console.log(
  bruteForce(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); */
console.log(bruteForce([[1]], 3));

const optimalSolution = (matrix = [[]], target) => {
  let top = 0,
    bottom = matrix.length - 1;
  while (top <= bottom) {
    const midIndx = top + Math.floor((bottom - top) / 2);
    const midRow = matrix[midIndx];
    if (target > midRow.at(-1)) {
      top = midIndx + 1;
    } else if (target < midRow[0]) {
      bottom = midIndx - 1;
    } else {
      break;
    }
  }
  if (!(top <= bottom)) {
    return false;
  }
  const rowIndx = top + Math.floor((bottom - top) / 2);
  let row = matrix[rowIndx],
    left = 0,
    right = row.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (row[mid] === target) return true;
    if (row[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

console.log(
  optimalSolution(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);

console.log(optimalSolution([[1]], 3));

