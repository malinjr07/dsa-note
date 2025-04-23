/**
 * # Increasing Number Triangle
 * Aryan and his friends are very fond of patterns. For a given integer ‘N’, they want to make the Increasing Number Triangle.

Example:
Input: ‘N’ = 3

Output: 

1
2 3
4 5 6

 */

function nNumberTriangle(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      count++;
      row += count;
    }
    console.log(row);
  }
}

nNumberTriangle(5);

