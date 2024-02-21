var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > min) {
      let diff = prices[i] - min;
      profit += diff;
    }
    min = prices[i];
  }
  return profit;
};

console.log(maxProfit([0, 0, 1, 1, 1, 1, 2, 3, 3]));

var maxProfitMinimumTransaction = function (prices) {
  let profit = 0;
  let transactions = [];
  let i = 0;

  // loop through the prices array until the second last element
  while (i < prices.length - 1) {
    // find the local minimum by skipping the prices that are higher than the next price

    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    // if we reach the end of the array, there is no more profit to be made
    if (i == prices.length - 1) {
      break;
    }
    // otherwise, we buy the stock at the local minimum
    let buy = prices[i];
    i++;
    // find the local maximum by skipping the prices that are lower than the next price
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    // we sell the stock at the local maximum
    let sell = prices[i];

    // update the profit and the transactions
    profit += sell - buy;
    transactions.push([buy, sell]);
  }

  // return the profit and the transactions
  return [profit, transactions];
};

console.log(maxProfitMinimumTransaction([0, -15, 6, -3, 7, 10, 1]));
