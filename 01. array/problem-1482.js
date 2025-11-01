const optimalSolution = (bloomDay = [], m, k) => {
  let l = Math.min(...bloomDay),
    r = Math.max(...bloomDay);
  let ans = -1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let consecutiveLength = 0,
      bouquets = 0;
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= mid) {
        consecutiveLength++;
        if (consecutiveLength >= k) {
          consecutiveLength = 0;
          bouquets++;
        }
      } else {
        consecutiveLength = 0;
      }
    }
    if (bouquets >= m) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
};

console.log(optimalSolution([7, 7, 7, 7, 12, 7, 7], 2, 3));

