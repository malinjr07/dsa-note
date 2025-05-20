const findSeconds = (arr = []) => {
  if (arr.length < 3) return [-1, -1];
  let largest = -Infinity;
  let smallest = Infinity;

  // Find the largest and smallest
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > largest) {
      largest = element;
    }
    if (element < smallest) {
      smallest = element;
    }
  }

  let secondLargest = -Infinity;
  let secondSmallest = Infinity;

  // Find the second largest and second smallest
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < largest && element > secondLargest) {
      secondLargest = element;
    }
    if (element > smallest && element < secondSmallest) {
      console.log(element);

      secondSmallest = element;
    }
  }
  return [secondLargest, secondSmallest];
};

console.log(findSeconds([1, 2, 4, 7, 7, 5]));
console.log(findSeconds([1]));

