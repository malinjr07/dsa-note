var candy = function (ratings) {
  if (ratings.length <= 1) return 1;
  let rslt = 0;
  const candyArr = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyArr[i] = candyArr[i - 1] + 1;
    }
  }
  console.log(candyArr);
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candyArr[i] <= candyArr[i + 1]) {
      candyArr[i] = candyArr[i + 1] + 1;
    }
  }
  console.log(candyArr);

  for (let i = 0; i < candyArr.length; i++) {
    rslt += candyArr[i];
  }
  return rslt;
};

console.log(candy([1, 6, 10, 8, 7, 3, 2]));
