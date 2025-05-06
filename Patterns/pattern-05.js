/**
 * # Seeding
 * Sam is planting trees on the upper half region (separated by the left diagonal) of the square shared field.

For every value of ‘N’, print the field if the trees are represented by ‘*’.

Example:
Input: ‘N’ = 3

Output: 
* * *
* *
*

 */

function Seeding(n = 0) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = n - i; j > 0; j--) {
      row += '*';
    }
    console.log(row);
  }
}

Seeding(4);

