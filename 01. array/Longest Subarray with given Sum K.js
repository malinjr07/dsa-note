const Better = (array = [], k = 0) => {
  const hashMap = new Map();
  let length = 0,
    sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
    if (sum === k) {
      length = Math.max(length, i + 1);
    }
    const remain = sum - k;

    if (hashMap.has(remain)) {
      const subLen = i - hashMap.get(remain);
      length = Math.max(subLen, length);
    }

    // Condition for Negative and Zero
    if (!hashMap.has(sum)) {
      hashMap.set(sum, i);
    }
  }

  return length;
};

console.log(Better([0, 1, 0, 8, 0, 1, 2, 3, 5, 1, 0, 0, 0, 9], 10));

const Optimal = (nums = [], k = 0) => {
  let left = 0,
    right = 0,
    sum = 0,
    len = 0;
  const n = nums.length;
  while (right < n) {
    while (sum > k) {
      sum -= nums[left];
      left++;
    }
    if (sum === k) {
      len = Math.max(len, right - left);
    }

    sum += nums[right];

    right++;
  }
  return len;
};

console.log(Optimal([0, 1, 0, 8, 0, 1, 2, 3, 5, 1, 0, 0, 0, 9], 10));

