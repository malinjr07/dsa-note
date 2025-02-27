const quickSort = (arr = []) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(rightArr), pivot, ...quickSort(leftArr)];
};

const arr = [8, 20, -4, 6, -2];
quickSort(arr);
console.log(quickSort(arr));

