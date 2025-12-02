const bruteForce = (strs = ['']) => {
  let output = '';

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      const str = strs[j];
      if (str[i] !== char) {
        return output;
      }
    }
    output += char;
  }
};

console.log(bruteForce(['flower', 'flow', 'flight']));

