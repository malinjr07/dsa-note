/**
 * # Reverse a given Array
 *
 */

const arrReverse = (arr) => {
  const reverse = (l, r) => {
    if (l >= r) return arr;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    return reverse(l + 1, r - 1);
  };
  return reverse(0, arr.length - 1);
};

console.log(arrReverse([1, 2, 3, 4, 5]));

const arrReverseSingle = (arr) => {
  const reverse = (i) => {
    if (i >= arr.length / 2) return arr;
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    return reverse(i + 1);
  };
  return reverse(0);
};

console.log(arrReverseSingle([1, 2, 3, 4, 5]));

