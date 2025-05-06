/**
 * # Triangle
 * Sam is making a Triangular painting for a maths project.

An N-dimensional Triangle is represented by the lower triangle of the pattern filled with integers representing the row number.

For every value of ‘N’, help sam to print the corresponding Triangle.

Example:
Input: ‘N’ = 3

Output: 
1
2 2 
3 3 3


 */

function Triangle(n = 0) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

Triangle(4);

