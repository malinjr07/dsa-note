function spiralTraverse(array) {
  // Write your code here.
  const result = [];
  let startRow = 0,
    endRow = array.length - 1;
  let startColumn = 0,
    endColumn = array[0].length - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    /**
     * First, we traverse the first row and push each item in the result array
     * We are using for loop to block the thread of the js engine
     */
    for (
      let startingCol = startColumn;
      startingCol <= endColumn;
      startingCol++
    ) {
      result.push(array[startRow][startingCol]);
    }

    /**
     * Once the first row is pushed, we will traverse the last column downward.
     * We will push the last value of each row
     * Or, we can say, we will push the last column
     * But, as the last value of the previously inserted row is also the first value of the last column,
     * we will skip that value to avoid duplication.
     * We can do that by starting the traverse from the second index of the endRow
     */
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endColumn]);
    }

    /**
     * Once all of the value of the last column is added, we will loop the end row backward
     * But, as the first value of this iteration is already added from the previous iteration,
     * we will skip the last value from our iteration by starting the iteration from the second last index of the last row
     * To avoid duplication, if we face such scenario where the startRow touches the endRow, we will break completely out from the loop
     *
     */
    for (let endingCol = endColumn - 1; endingCol >= startColumn; endingCol--) {
      if (startRow === endRow) {
        break;
      }
      result.push(array[endRow][endingCol]);
    }

    /**
     * Once all of the value of the last row is added, we will loop the startingRow upward
     * But, as the first value of this iteration is already added from the previous iteration,
     * we will skip the last value from our iteration by starting the iteration from the second last index of the first column.
     * Again, as the first value of the first column was added at the first loop, we will traverse till the second value of the first column.
     * To avoid duplication, if we face such scenario where the startColumn touches the endColumn, we will break completely out from the loop.
     */
    for (let endingRow = endRow - 1; endingRow > startRow; endingRow--) {
      if (startColumn === endColumn) {
        break;
      }
      result.push(array[endingRow][startColumn]);
    }

    startRow++;
    endRow--;
    startColumn++;
    endColumn--;
  }
  return result;
}
