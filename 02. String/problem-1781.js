const optimalSolution = (s = '') => {
  let totalBeauty = 0;
  for (let i = 0; i < s.length; i++) {
    const freqArr = new Array(26).fill(0);

    for (let j = i; j < s.length; j++) {
      freqArr[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;
      let maxFreq = Number.MIN_SAFE_INTEGER;
      let minFreq = Number.MAX_SAFE_INTEGER;

      for (let k = 0; k < 26; k++) {
        if (freqArr[k] > 0) {
          minFreq = Math.min(freqArr[k], minFreq);
          maxFreq = Math.max(freqArr[k], maxFreq);
        }
      }
      totalBeauty += maxFreq - minFreq;
    }
  }
  return totalBeauty;
};

console.log(optimalSolution('aabcbaa'));

