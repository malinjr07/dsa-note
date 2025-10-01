var setZeroes = function (matrix = [[]]) {
  const zeroArr = [];

  // Storing the Index that has 0 as value
  for (const key in matrix) {
    if (matrix[key].includes(0)) {
      matrix[key].forEach((element, index) => {
        if (element === 0) zeroArr.push(index);
      });
      // If the current array has 0, we are replacing the whole array with a new array, filled with value 0
      matrix[key] = new Array(matrix[key].length).fill(0);
    }
  }

  // Now, we iterate through the matrix and replace the index of 0 value of each array with 0
  for (const element of matrix) {
    zeroArr.forEach((zeros) => {
      element[zeros] = 0;
    });
  }

  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

/**
 * Solution 1: Using auxiliary arrays for rows and columns.
 * Time Complexity: O(M * N)
 * Space Complexity: O(M + N)
 *
 * @param {number[][]} matrix The m x n integer matrix to be modified in place.
 */
var setZeroes_MN_Space = function (matrix) {
  const M = matrix.length;
  const N = matrix[0].length;

  // 1. Initialize auxiliary space to track rows and columns that need zeroing.
  // rowZero[i] = true means row 'i' must be zeroed.
  const rowZero = new Array(M).fill(false);
  // colZero[j] = true means column 'j' must be zeroed.
  const colZero = new Array(N).fill(false);

  // --- Pass 1: Scan the matrix and mark the affected rows and columns ---
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === 0) {
        rowZero[i] = true;
        colZero[j] = true;
      }
    }
  }

  // --- Pass 2: Use the markers to set the required elements to zero ---
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      // If the current row 'i' was marked OR the current column 'j' was marked, set to 0.
      if (rowZero[i] || colZero[j]) {
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

/**
 * Solution 2: Using the first row and first column as markers.
 * Time Complexity: O(M * N)
 * Space Complexity: O(1) (True In-Place)
 *
 * @param {number[][]} matrix The m x n integer matrix to be modified in place.
 */
var setZeroes_O1_Space = function (matrix) {
  const M = matrix.length;
  const N = matrix[0].length;
  let isColZero = false; // Separate marker for Column 0

  // --- Pass 1: Scan and Mark Markers ---
  // Iterate through rows (i)
  for (let i = 0; i < M; i++) {
    // Check if Column 0 needs to be zeroed (special case handled by isColZero)
    if (matrix[i][0] === 0) {
      isColZero = true;
    }

    // Iterate through columns starting from j=1
    for (let j = 1; j < N; j++) {
      if (matrix[i][j] === 0) {
        // If we find a zero, set the marker in its corresponding first row and first column cell to 0.
        matrix[i][0] = 0; // Marks row i
        matrix[0][j] = 0; // Marks column j
      }
    }
  }

  // --- Pass 2: Zero Out the Inner Matrix (using markers) ---
  // Start from i=1 and j=1 to avoid overwriting markers prematurely
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      // Check the marker in the first cell of the current row (matrix[i][0])
      // OR the marker in the first cell of the current column (matrix[0][j])
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // --- Pass 3: Zero Out the First Row and First Column (based on markers) ---

  // 1. Check if Row 0 needs to be zeroed (using the marker at matrix[0][0])
  if (matrix[0][0] === 0) {
    // Zero out the entire first row
    for (let j = 0; j < N; j++) {
      matrix[0][j] = 0;
    }
  }

  // 2. Check if Column 0 needs to be zeroed (using the 'isColZero' variable)
  if (isColZero) {
    // Zero out the entire first column
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

