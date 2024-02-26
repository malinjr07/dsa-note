/**
 * # Best Time To Buy and Sell Stock #
 * You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/**
 * ## Brute Force Solution | Time O(N) Space O(1) ##
 * We will go with two pointer, one will be buying pointer, another will be selling pointer. On each iteration, we will compare the prices of these two dates. If we see that the selling price is bigger than the buying price, then we will calculate the difference and update the profit. We will take the maximum profit only. That means, we compare our previous profit with the new price different and will update the profit only if the difference is bigger than the current profit value. But, If we see the selling price is less than the buying price, then we will set the current buying date as our new selling date and the next date of the newly assigned buying date will be our new selling date.
 */

var maxProfitBruteForce = function (prices) {
  let buyingDateIndx = 0;
  let sellingDateIndx = 1;
  let result = 0;

  while (sellingDateIndx < prices.length) {
    const buyingPrice = prices[buyingDateIndx];
    const sellingPrice = prices[sellingDateIndx];
    if (sellingPrice > buyingPrice) {
      const diff = sellingPrice - buyingPrice;
      if (diff > result) result = diff;
      sellingDateIndx++;
    } else {
      buyingDateIndx = sellingDateIndx;
      sellingDateIndx = buyingDateIndx + 1;
    }
  }

  return result;
};

console.log(maxProfitBruteForce([7, 1, 5, 3, 6, 4]));
console.log(maxProfitBruteForce([7, 6, 4, 3, 1]));

/**
 * We can Clean up our code, Make it simple. If we see our brute force approach, we are updating the buying date based on comparison of minimum price between buying date and selling date. Again, we can update the Profit based on the comparison of maximum price between the difference and our calculated profit value.
 * So, we can use Math.min() & Math.max()
 */

var maxProfit = function (prices) {
  let buyingDate = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    buyingDate = Math.min(buyingDate, prices[i]);
    profit = Math.max(profit, prices[i] - buyingDate);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
