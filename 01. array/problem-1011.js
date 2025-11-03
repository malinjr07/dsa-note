const optimalSolution = (weights = [], days) => {
  let capacity = weights.reduce((sum, weights) => (sum += weights), 0),
    maxWeight = Math.max(...weights),
    left = maxWeight,
    right = capacity;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    let currentLoad = 0;
    let requiredDays = 1;

    for (const element of weights) {
      currentLoad += element;
      if (currentLoad > mid) {
        currentLoad = element;
        requiredDays++;
      }
    }
    if (requiredDays <= days) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(optimalSolution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

