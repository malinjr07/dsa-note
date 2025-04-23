/**
 * # Reverse Letter Triangle
 * Aryan and his friends are very fond of patterns. For a given integer ‘N’, they want to make the Reverse Letter Triangle.

You must print a matrix corresponding to the given Reverse Letter Triangle.

Example:
Input: ‘N’ = 3

Output: 

A B C
A B
A


 */

function nLetterTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - i; j++) {
      row += String.fromCharCode(65 + j);
    }
    console.log(row);
  }
}

nLetterTriangle(5);

