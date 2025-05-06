/**
 * # Alpha-Triangle
 * Sam is researching on Alpha-Triangles. So, he needs to create them for different integers ‘N’.

An Alpha-Triangle is represented by the triangular pattern of alphabets in reverse order.

For every value of ‘N’, help sam to print the corresponding Alpha-Triangle.

Example:
Input: ‘N’ = 3

Output: 
C
C B 
C B A

 */

function alphaTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row = String.fromCharCode(65 + n - j - 1) + row;
    }
    console.log(row);
  }
}

alphaTriangle(5);

