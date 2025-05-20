const countSort = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  min = Math.abs(min);
  const positiveArr = [...arr];
  for (let i = 0; i < positiveArr.length; i++) {
    positiveArr[i] = positiveArr[i] + min;
  }
  let positiveMin = positiveArr[0];
  let positiveMax = positiveArr[0];
  for (let i = 0; i < positiveArr.length; i++) {
    const element = positiveArr[i];
    if (element < positiveMin) {
      positiveMin = element;
    }
    if (element > positiveMax) {
      positiveMax = element;
    }
  }

  const tempArr = new Array(positiveMax);

  for (let i = 0; i < positiveArr.length; i++) {
    const element = positiveArr[i];
    if (!tempArr[element]) {
      tempArr[element] = 0;
    }
    tempArr[element] += 1;
  }

  let indx = 0;
  for (let i = 0; i < tempArr.length; i++) {
    while (tempArr[i] > 0) {
      positiveArr[indx++] = i;
      tempArr[i]--;
    }
  }

  for (let i = 0; i < positiveArr.length; i++) {
    positiveArr[i] = positiveArr[i] - min;
  }

  return positiveArr;
};

const nums = [8, 20, -4, 6, -2];
console.log(countSort(nums));

