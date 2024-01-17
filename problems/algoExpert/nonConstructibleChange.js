/**
 * The base principle is,
 * in a sorted array,
 * one element must have it's 1 integer larger value on the next element,
 * if we don't find that element, then that is the non-constructive change
 * even if all the elements are in sequence, if we sum up all integer,
 * that'd be the last change amount that those element can create altogether
 * And, if we add 1 with that sum value, we will get the lowest non-constructive change of the given coins
 */

function nonConstructibleChange(coins) {
  // Write your code here.
  let currentCreatedChange = 0;
  console.log('coins:', coins);
  coins.sort((a, b) => a - b);
  console.log('coins:', coins);

  for (let coin of coins) {
    console.log('coin:', coin, ', currentCreatedChange:', currentCreatedChange);
    if (coin > currentCreatedChange + 1) {
      return console.log(currentCreatedChange + 1);
    }
    currentCreatedChange += coin;
  }
  return console.log(currentCreatedChange + 1);
}

nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);
