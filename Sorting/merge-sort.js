/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArray = function (nums) {
  if (nums.length < 2) return nums;
  const mid = Math.ceil(nums.length / 2);
  const leftArray = nums.slice(0, mid);
  const rightArray = nums.slice(mid);
  return merge(sortArray(leftArray), sortArray(rightArray));
};

const merge = (leftArray = [], rightArray = []) => {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    // this condition will determine the ascending or descending order
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
};

console.log(sortArray([5, 1, 1, 2, 0, 0]));

function mergeWithIndex(arr, low, mid, high) {
  let temp = []; // Temporary array to hold merged elements
  let left = low; // Starting index of left subarray
  let right = mid + 1; // Starting index of right subarray

  // Merge elements into temp array in sorted order
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  // Copy remaining elements of left subarray
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // Copy remaining elements of right subarray
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // Transfer elements from temp to original array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return; // Base case: subarray has 0 or 1 element
  const mid = Math.floor((low + high) / 2); // Calculate midpoint
  mergeSort(arr, low, mid); // Recursively sort left half
  mergeSort(arr, mid + 1, high); // Recursively sort right half
  mergeWithIndex(arr, low, mid, high); // Merge sorted halves
}

const array = [5, 1, 1, 2, 0, 0];

mergeSort(array, 0, array.length - 1);

console.log('Sorted Array', array);

