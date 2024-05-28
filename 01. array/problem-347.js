var topKFrequent = function (nums, k) {
  const res = [];
  const tempObj = {};
  for (e of nums) {
    if (tempObj.hasOwnProperty(tempObj[e])) {
      tempObj[e] += 1;
    } else {
      tempObj[e] = 1;
    }
    console.log(tempObj);
    if (tempObj[e] >= k) {
      res.push(e);
    }
  }
  console.log(res);
};

topKFrequent([-1, -1], 1);

