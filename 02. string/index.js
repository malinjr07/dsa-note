var isPalindrome = function (s) {
  const onlyChars = s.replaceAll(/[^a-zA-Z0-9]/gm, '').toLowerCase();
  console.log('🚀 ~ isPalindrome ~ onlyChars:', onlyChars);

  return onlyChars === onlyChars.split('').reverse().join('');
};

console.log(isPalindrome('0P'));
