var hIndex = function (citations) {
  const n = citations.length;
  const buckets = new Array(n + 1).fill(0);
  console.log('buckets:', buckets);

  for (let num of citations) {
    console.log('num:', num);
    console.log('n:', n);
    if (num >= n) {
      buckets[n]++;
      console.log('buckets:', buckets);
    } else {
      buckets[num]++;
      console.log('buckets:', buckets);
    }
  }

  let count = 0;

  for (let i = buckets.length - 1; i >= 0; i--) {
    count += buckets[i];
    console.log('count:', count);
    console.log('i:', i);

    if (count >= i) {
      return i;
    }
  }

  return 0;
};

console.log(hIndex([3, 0, 6, 1, 5, 7, 8]));
