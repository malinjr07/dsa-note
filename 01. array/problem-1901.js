const optimalSolution = (mat = [[]]) => {
  const m = mat.length,
    n = mat[0].length;
  let low = 0,
    high = n - 1;

  while (low <= high) {
    const midIndx = Math.floor((high + low) / 2);
    let maxRow = 0;

    for (let i = 0; i < m; i++) {
      if (mat[i][midIndx] > mat[maxRow][midIndx]) {
        maxRow = i;
      }
    }

    const leftIsBigger =
      midIndx > 0 && mat[maxRow][midIndx - 1] > mat[maxRow][midIndx];
    const rightIsBigger =
      midIndx < n - 1 && mat[maxRow][midIndx + 1] > mat[maxRow][midIndx];

    if (!leftIsBigger && !rightIsBigger) return [maxRow, midIndx];
    else if (leftIsBigger) high = midIndx - 1;
    else low = midIndx + 1;
  }
  return [-1, -1];
};

console.log(
  optimalSolution([
    [70, 50, 40, 30, 20],
    [100, 1, 2, 3, 4],
  ])
);

