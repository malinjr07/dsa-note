const countSort = (arr) => {
  // Get the least value for sorting the arr with negative value
  const minValue = Math.abs(Math.min(...arr));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + minValue;
  }
  // maxValue to create a temporary array
  const maxValue = Math.max(...arr);
  const tempArr = new Array(maxValue);
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i];
    if (!tempArr[index]) {
      tempArr[index] = 0;
    }
    tempArr[index] += 1;
  }
  let index = 0;
  for (let i = 0; i < tempArr.length; i++) {
    while (tempArr[i] > 0) {
      arr[index++] = i;
      tempArr[i]--;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] - minValue;
  }
};

const arr = [8, 20, -4, 6, -2];
countSort(arr);
console.log(arr);

