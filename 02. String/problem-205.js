const bruteForce = (s = '', t = '') => {
  const obj = {};
  if (s.length !== t.length) return false;
  let l = 0,
    r = s.length;
  while (l < r) {
    const key = s[l],
      value = t[l];
    if (obj[key]) {
      if (obj[key] === value) {
        l++;
        continue;
      } else {
        return false;
      }
    } else {
      obj[key] = value;
    }
    l++;
  }
  return true;
};

console.log(bruteForce('badc', 'baba'));

const optimalSolution = (s = '', t = '') => {
  if (s.length !== t.length) return false;
  const map1 = new Array(256),
    map2 = new Array(256);
  for (let idx = 0; idx < s.length; idx++) {
    if (map1[s.charCodeAt(idx)] !== map2[t.charCodeAt(idx)]) {
      return false;
    }
    map1[s.charCodeAt(idx)] = idx + 1;
    map2[t.charCodeAt(idx)] = idx + 1;
  }
  return true;
};

console.log(optimalSolution('badc', 'baba'));

