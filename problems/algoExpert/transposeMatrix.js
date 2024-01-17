function transposeMatrix(matrix) {
  // Write your code here.
  const finalArr = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    finalArr.push(newRow);
  }
  console.log(finalArr);
}
transposeMatrix([
  [0, -1, -2],
  [4, 5, 6, 7],
  [2, 3, -2, -3],
  [42, 100, 30, -42],
]);
