const setZeroes_MN_Space = (matrix = [[]]) => {
  const m = matrix.length;
  const n = matrix[0].length;

  const rowZeros = new Array(m).fill(false);
  const colZeros = new Array(n).fill(false);

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
      if (matrix[i][j] === 0) {
        rowZeros[i] = true;
        colZeros[j] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
      if (rowZeros[i] || colZeros[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

console.log(
  setZeroes_MN_Space([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

const setZeroes_O1_Space = function (matrix = [[]]) {
  const M = matrix.length;
  const N = matrix[0].length;
  let columnZero = false;

  // Iterate through the Matrix to keep tracking the 0th element on first column & first row
  for (let i = 0; i < M; i++) {
    if (matrix[i][0] === 0) {
      columnZero = true;
    }
    for (let j = 1; j < N; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // convert all inner element except 0th element and 0th array based on 0th elements and 0th arrays
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      console.log(j);
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  //convert the 0th array
  if (matrix[0][0] === 0) {
    for (let i = 0; i < N; i++) {
      matrix[0][i] = 0;
    }
  }
  // convert all 0th element of each array
  if (columnZero) {
    for (let i = 0; i < M; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

console.log(
  setZeroes_O1_Space([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

