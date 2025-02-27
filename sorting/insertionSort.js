const insertionSort = (arr = []) => {
  if (arr.length === 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    const nti = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < nti) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = nti;
  }
};

const arr = [8, 20, -4, 6, -2];
insertionSort(arr);
console.log(arr);

