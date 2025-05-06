/**
 * # Alpha Hill
 * Sam is curious about Alpha-Hills, so he decided to create Alpha-Hills of different sizes.

An Alpha-hill is represented by a triangle, where alphabets are filled in palindromic order.

For every value of ‘N’, help sam to return the corresponding Alpha-Hill.

Example:
Input: ‘N’ = 3

Output: 
    A
  A B A
A B C B A

 */

function starTriangle(n = 0) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 1; j < n - i; j++) {
      row += '\xa0';
    }
    const charCount = 2 * i + 1;
    let charCode = 65;

    for (let j = 1; j <= charCount; j++) {
      row += String.fromCharCode(charCode);
      if (j <= charCount / 2) {
        charCode++;
      } else {
        charCode--;
      }
    }

    for (let j = 1; j < n - i; j++) {
      row += '\xa0';
    }
    console.log(row);
  }
}

starTriangle(5);

