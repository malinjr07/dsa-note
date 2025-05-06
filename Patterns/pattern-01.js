/**
 * # N-Forest
 * Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’.
 * For every value of ‘N’, help sam to print the corresponding N-dimensional forest.
 * Example:
 * Input: ‘N’ = 3
 * Output:
 * * *
 * * *
 * * *
 */

function nForest(n = 0) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += '*';
    }
    console.log(row);
  }
}

nForest(2);

