var spiralOrder = function (matrix = [[]]) {
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;
  const output = [];
  while (left <= right && top <= bottom) {
    // Top Row
    for (let i = left; i <= right; i++) {
      const element = matrix[top][i];
      output.push(element);
    }
    top += 1;

    // Right Column
    for (let i = top; i <= bottom; i++) {
      const element = matrix[i][right];
      output.push(element);
    }
    right -= 1;

    if (top <= bottom) {
      //Bottom Row
      for (let i = right; i >= left; i--) {
        const element = matrix[bottom][i];
        output.push(element);
      }
      bottom -= 1;
    }
    if (left <= right) {
      // left column
      for (let i = bottom; i >= top; i--) {
        const element = matrix[i][left];
        output.push(element);
      }
      left += 1;
    }
  }
  return output;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

