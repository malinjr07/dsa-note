function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const alphabetsCounter = new Array(26).fill(0);

  for (let i = 0; i < magazine.length; i++) {
    const c = magazine.charCodeAt(i) - 'a'.charCodeAt(0);
    alphabetsCounter[c]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const c = ransomNote.charCodeAt(i) - 'a'.charCodeAt(0);
    if (alphabetsCounter[c] === 0) return false;
    alphabetsCounter[c]--;
  }
  return true;
}

console.log(canConstruct('aabs', 'baad'));
