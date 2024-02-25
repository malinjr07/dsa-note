var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  const map1 = [];
  const map2 = [];
  for (let idx = 0; idx < s.length; idx++) {
    if (map1[s.charAt(idx)] != map2[t.charAt(idx)]) return false;
    map1[s.charAt(idx)] = idx + 1;
    map2[t.charAt(idx)] = idx + 1;
  }
  return true;
};
console.log(isIsomorphic('foo', 'bar'));
