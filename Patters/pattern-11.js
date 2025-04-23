/**
 * # Binary Number Triangle
 * Aryan and his friends are very fond of the pattern. For a given integer ‘N’, they want to make the N-Binary Number Triangle.

You are required to print the pattern as shown in the examples below.

Example:
Input: ‘N’ = 3

Output: 

1
0 1
1 0 1

 */

function nBinaryTriangle(n = 0) {
  for (let i = 0; i < n; i++) {
    let start = i % 2 === 0 ? 1 : 0;
    let row = '';

    for (let j = 0; j <= i; j++) {
      row += start;
      start = 1 - start;
    }

    console.log(row);
  }
}

nBinaryTriangle(3);

