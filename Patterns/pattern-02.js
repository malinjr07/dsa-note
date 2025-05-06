/**
 * # N/2-Forest
 * Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’.

An N/2-dimensional forest is represented by the lower triangle of the pattern filled with ‘*’.

For every value of ‘N’, help sam to print the corresponding N/2-dimensional forest.

Example:
Input:  ‘N’ = 3

Output: 
* 
* *
* * *
 */

function nForest(n = 0) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

nForest(4);

