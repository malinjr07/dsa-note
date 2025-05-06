/**
 * # Number Crown
 * Aryan and his friends are very fond of the pattern. They want to make the Reverse N-Number Crown for a given integer' N'.

Given 'N', print the corresponding pattern.

Example:
Input: ‘N’ = 3

Output: 

1         1
1 2     2 1
1 2 3 3 2 1

 */

function numberCrown(n) {
  let spaces = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    for (let j = 0; j < spaces; j += 2) {
      row += ' ';
    }

    for (let j = i; j >= 1; j--) {
      row += j;
    }
    console.log(row);
    spaces -= 2;
  }
}
numberCrown(5);

