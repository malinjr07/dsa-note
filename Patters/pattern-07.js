/**
 * # Star Triangle
 * Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the N-Star Triangle.

Example:
Input: ‘N’ = 3

Output: 

  *
 ***
*****


 */

function starTriangle(n = 0) {
  for (let i = 1; i < n; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

starTriangle(5);

