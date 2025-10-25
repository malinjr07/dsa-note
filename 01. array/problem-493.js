const bruteForce = (nums = []) => {
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    const anchor = nums[i];
    for (let j = i - 1; j >= 0; j--) {
      const element = nums[j];
      if (element > anchor * 2) {
        count++;
      }
    }
  }
  return count;
};

console.log(bruteForce([2, 4, 3, 5, 1]));

const optimalSolution = (nums = []) => {
  let count = 0;

  const mergeSort = (start, end) => {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      mergeSort(start, mid);
      mergeSort(mid + 1, end);
      count += counter(start, mid, end);
    }
  };

  const counter = (start, mid, end) => {
    let count = 0;
    const temp = [];
    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
      if (nums[i] <= 2 * nums[j]) {
        i++;
      } else {
        count += mid - i + 1;
        j++;
      }
    }

    i = start;
    j = mid + 1;

    while (i <= mid && j <= end) {
      if (nums[i] <= nums[j]) {
        temp.push(nums[i]);
        i++;
      } else {
        temp.push(nums[j]);
        j++;
      }
    }

    while (i <= mid) {
      temp.push(nums[i]);
      i++;
    }

    while (j <= end) {
      temp.push(nums[j]);
      j++;
    }

    for (let k = 0; k < temp.length; k++) {
      nums[start + k] = temp[k];
    }

    return count;
  };

  mergeSort(0, nums.length - 1);
  return count;
};

console.log(optimalSolution([2, 4, 3, 5, 1]));

