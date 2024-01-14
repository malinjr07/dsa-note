function sortedSquaredArray(array) {
  // Write your code here.
  const finalArr = new Array(array.length).fill(0);
  let smallerIndex = 0;
  let largerIndex = array.length - 1;

  for (let index = array.length - 1; index >= 0; index--) {
    const smallerValueSquared = array[smallerIndex] ** 2;

    const largerValueSquared = array[largerIndex] ** 2;

    if (smallerValueSquared > largerValueSquared) {
      finalArr[index] = smallerValueSquared;
      smallerIndex++;
    } else {
      finalArr[index] = largerValueSquared;
      largerIndex--;
    }
  }
  return console.log(finalArr);
}

sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]);
