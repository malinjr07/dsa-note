var rotate = function (matrix = [[]]) {
  const n = matrix.length - 1;
  const output = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      output[j][n - i] = matrix[i][j];
    }
  }

  return output;
};

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);

const rotateOptimal = (matrix = [[]]) => {
  let left = 0,
    right = matrix.length - 1;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      const top = left,
        bottom = right;
      const topLeft = matrix[top][left + i];

      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = topLeft;
    }
    left++;
    right--;
  }
  return matrix;
};

console.log(
  rotateOptimal([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);

const rotateTransposeReverse = (matrix = [[]]) => {
  // We assume the matrix is N x N (square) as per the problem constraints.
  const N = matrix.length;

  // --- Step 1: Reverse the rows (Vertical Flip) ---
  // Swaps matrix[i] with matrix[N - 1 - i]
  // We only iterate up to Math.floor(N / 2) to prevent swapping them back.
  // Example: For a 4x4 matrix, i=0 swaps row 0 and 3; i=1 swaps row 1 and 2.
  let top = 0;
  let bottom = N - 1;

  while (top < bottom) {
    for (let col = 0; col < N; col++) {
      [matrix[top][col], matrix[bottom][col]] = [
        matrix[bottom][col],
        matrix[top][col],
      ];
    }
    top++;
    bottom--;
  }

  // --- Step 2: Transpose the matrix in place ---
  // Swaps matrix[i][j] with matrix[j][i] for the upper triangular part (j > i)
  // This ensures every pair is swapped exactly once.
  for (let row = 0; row < N; row++) {
    // Start j at i + 1 to only consider the elements above the main diagonal
    for (let col = row + 1; col < N; col++) {
      // Swap matrix[row][col] with matrix[col][row]
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  return matrix;
};

console.log(
  rotateTransposeReverse([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);

