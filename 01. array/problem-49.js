var groupAnagrams = function (strs) {
  const tempObj = {};
  const sortedArr = strs.map((item) => item.split('').sort().join(''));
  /* console.log ('🚀 ~ groupAnagrams ~ sortedArr:', sortedArr);*/
  for (let i = 0; i < sortedArr.length; i++) {
    if (tempObj.hasOwnProperty(sortedArr[i])) {
      tempObj[sortedArr[i]].push(strs[i]);
    } else {
      tempObj[sortedArr[i]] = [strs[i]];
    }
  }
  /* console.log ('12 ~ groupAnagrams ~ tempObj:', Object.values(tempObj));*/
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

var groupAnagramsOptimal = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join(',');
    /* console.log ("23 ~ key:", key)*/
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  /* console.log ('26 ~ tempObj:', res);*/
  /* console.log ('26 ~ tempObj:', Object.values(res));*/
};
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)

groupAnagramsOptimal([
  'eat',
  'tea',
  'tan',
  'ate',
  'nat',
  'bat',
  'bdddddddddd',
  'bbbbbbbbbbc',
]);

