var groupAnagrams = function (strs) {
  const obj = {};
  /* for (const word of strs) {
    const count = new Array(26).fill(0);

    for (const letter of word) {
      count[letter.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    const key = count.toString();
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(word);
  } */

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const count = new Array(26).fill(0);
    for (let j = 0; j < word.length; j++) {
      count[word.charCodeAt(j) - 97] += 1;
    }
    const key = count.toString();
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(word);
  }
  return Object.values(obj);
};

console.log(groupAnagrams(['eat', 'tea', 'ate', 'tan', 'nat', 'bat']));

