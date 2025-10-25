const optimal = (intervals = [[]]) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let output = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const lastElement = output[output.length - 1];
    const lastInterval = lastElement[lastElement.length - 1];

    if (start <= lastInterval) {
      output[output.length - 1] = [lastElement[0], Math.max(lastInterval, end)];
    } else {
      output.push([start, end]);
    }
  }
  return output;
};

console.log(
  optimal([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

