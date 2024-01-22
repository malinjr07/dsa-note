function moveElementToEnd(array, toMove) {
  // Write your code here.
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer < rightPointer) {
    if (array[rightPointer] === toMove) {
      rightPointer--;
    } else if (array[leftPointer] === toMove) {
      const tempVar = array[rightPointer];
      array[rightPointer] = array[leftPointer];
      array[leftPointer] = tempVar;
    } else {
      leftPointer++;
    }
  }
  return array;
}

moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);
