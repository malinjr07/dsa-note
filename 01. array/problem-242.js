var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const tempObj = {};

  for (let i = 0; i < s.length; i++) {
    if (tempObj[s[i]]) {
      tempObj[s[i]] += 1;
    } else {
      tempObj[s[i]] = 1;
    }

    if (tempObj[t[i]]) {
      tempObj[t[i]] -= 1;
    } else {
      tempObj[t[i]] = -1;
    }
  }
  const valueArr = Object.values(tempObj);
  for (let j = 0; j < valueArr.length; j++) {
    if (valueArr[j] > 0 || valueArr[j] < 0) return false;
  }
  return true;
};

isAnagram('cat', 'rat');

var sortedIsAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  return t.split('').sort().join('') === s.split('').sort().join(''); // as the sort method use in-place sorting, no extra space is required
};

sortedIsAnagram('anagram', 'mangara');

