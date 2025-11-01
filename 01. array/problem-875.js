const optimalSolution = (piles = [], h) => {
  let left = 0,
    right = Math.max(...piles),
    res = right;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }
    if (hours <= h) {
      res = Math.min(res, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res;
};

console.log(optimalSolution([30, 11, 23, 4, 20], 5));

