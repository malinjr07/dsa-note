/**
 * # Star Diamond
 * Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the N-Star Diamond.

Example:
Input: ‘N’ = 3

Output: 

  *
 ***
*****
*****
 ***
  *

 */

function starTriangle(n = 0) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 1; j < n - i; j++) {
      row += '\xa0';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      row += '*';
    }
    for (let j = 1; j < n - i; j++) {
      row += '\xa0';
    }

    console.log(row);
  }

  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '\xa0';
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      row += '*';
    }
    for (let j = 1; j <= i; j++) {
      row += '\xa0';
    }
    console.log(row);
  }
}

starTriangle(5);

