const selectionSort = (array = []) => {
  for (let i = 0; i < array.length - 2; i++) {
    let selected = i;
    for (let j = i; j <= array.length - 1; j++) {
      if (array[j] < array[selected]) {
        selected = j;
      }
    }
    // [array[i], array[selected]] = [array[selected], array[i]];
    const temp = array[selected];
    array[selected] = array[i];
    array[i] = temp;
  }
  return array;
};

const response = selectionSort([5, 8, 6, 4, 9, 2, 5, 4, 3, 8, 7]);
console.log('🚀 ~ response:', response);

