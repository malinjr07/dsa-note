function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  const bound = Math.max(arrayOne.length, arrayTwo.length);
  let smallest = Infinity;
  let pair = [];

  for (let index = 0; index < bound; index++) {
    arrayTwo.forEach((element) => {
      const diff = Math.abs(element - arrayOne[index]);
      // console.log('diff:', diff, element, arrayOne[index], smallest);
      if (diff < smallest) {
        smallest = diff;
        console.log('smallest:', smallest, [arrayOne[index], element]);
        pair = [arrayOne[index], element];
      }
    });
  }

  console.log(pair);
}

smallestDifference(
  [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
  [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
);
