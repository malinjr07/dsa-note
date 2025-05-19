/**
 * #
 *
 */

const insertionSort = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    let indx = i;
    while (indx > 0 && arr[indx] < arr[indx - 1]) {
      [arr[indx], arr[indx - 1]] = [arr[indx - 1], arr[indx]];
      indx--;
    }
  }
  return arr;
};

console.log(
  insertionSort([
    363, 74, 8, 55, 96, 411, 25, 364, 58, 78, 51, 53, 52, 95, 82, 37,
  ])
);

