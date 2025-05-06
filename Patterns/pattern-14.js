/**
 * # Increasing Letter Triangle
 * Aryan and his friends are very fond of patterns. For a given integer ‘N’, they want to make the Increasing Letter Triangle.

Example:
Input: ‘N’ = 3

Output: 

A
A B
A B C

 */

function nLetterTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 + j);
    }
    console.log(row);
  }
}

nLetterTriangle(5);

