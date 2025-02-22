var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let n of nums) {
    freqMap.set(n, (freqMap.get(n) || 0) + 1);
  }
  for (let [num, freq] of freqMap) {
    if (bucket[freq]) {
      bucket[freq] = bucket[freq].add(num);
    } else {
      bucket[freq] = new Set().add(num);
    }
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));

var topKSortedFrequent = function (nums, k) {
  const obj = new Map();
  const rsltArr = [];

  for (n of nums) {
    obj.set(n, (obj.get(n) || 0) + 1);
  }

  const sortedArr = Array.from(obj).sort(
    ([key1, value1], [key2, value2]) => value2 - value1
  );

  for (let i = 0; i < k; i++) {
    rsltArr.push(sortedArr[i][0]);
  }
  return rsltArr;
};

console.log(topKSortedFrequent([4, 1, -1, 2, -1, 2, 3], 2));

