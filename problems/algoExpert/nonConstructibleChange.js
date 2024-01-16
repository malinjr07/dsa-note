function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);
  let currentCreatedChange = 0;

  for (let coin of coins) {
    if (coin > currentCreatedChange + 1) {
      return currentCreatedChange + 1;
    }
    currentCreatedChange += coin;
  }
  return 1 + currentCreatedChange;
}
