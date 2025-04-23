/**
 * # Rotated Triangle
 * Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the N-Star Rotated Triangle.

Example:
Input: ‘N’ = 3

Output: 

*
**
***
**
*

 */

function nStarTriangle(n = 0) {
  for (let i = 1; i < n; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += '*';
    }
    console.log(row);
  }
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = n - i; j > 0; j--) {
      row += '*';
    }
    console.log(row);
  }
}

nStarTriangle(3);

