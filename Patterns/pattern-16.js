/**
 * # Alpha-Ramp
 * Sam is curious about Alpha-Ramp, so he decided to create Alpha-Ramp of different sizes.

An Alpha-Ramp is represented by a triangle, where alphabets are filled from the top in order.

For every value of ‘N’, help sam to return the corresponding Alpha-Ramp.

Example:
Input: ‘N’ = 3

Output: 
A
B B
C C C

 */

function alphaRamp(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 + i);
    }
    console.log(row);
  }
}

alphaRamp(5);
