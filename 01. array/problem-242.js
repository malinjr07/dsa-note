var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const firstArr = s.split('').sort().join();
  const secondArr = t.split('').sort().join();
  return firstArr === secondArr;
};

const isAnagramWithArr = (s, t) => {
  const alphabet = new Array(256).fill(0);
  for (let i = 0; i < s.length; i++) {
    alphabet[s.charCodeAt(i)] += 1;
  }
  for (let j = 0; j < t.length; j++) {
    alphabet[t.charCodeAt(j)] -= 1;
  }
  for (const num of alphabet) {
    if (num !== 0) {
      return false;
    }
  }
  return true;
};

isAnagramWithArr('anagram', 'nagaram');

