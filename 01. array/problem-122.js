var maxProfit = function (prices) {
  let profit = 0;
  let buyIndx = 0;
  let sellIndx = 1;

  while (sellIndx < prices.length) {
    const buyPrice = prices[buyIndx];
    const sellPrice = prices[sellIndx];
    if (sellPrice > buyPrice) {
      profit += sellPrice - buyPrice;
    }
    buyIndx = sellIndx;
    sellIndx++;
  }
  return profit;
};

