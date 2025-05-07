/**
 * # Valid Palindrome
 *
 */

const validPalindromeLoop = (s = '') => {
  if (s.length <= 1) return true;
  let rslt = '';
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase Character
      charCode += 32;
    }

    if ((charCode >= 97 && charCode <= 122) || charCode <= 9) {
      rslt += String.fromCharCode(charCode);
    } else {
      continue;
    }
  }

  for (let i = 0; i < rslt.length / 2; i++) {
    if (rslt[i] !== rslt[rslt.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(validPalindromeLoop('race a car'));

const validPalindromeRecursion = (s = '') => {
  if (s.length <= 1) return true;
  let rslt = '';

  const makePureString = (i = 0) => {
    if (i >= s.length) return;
    let charCode = s.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase Character
      charCode += 32;
    }

    if ((charCode >= 97 && charCode <= 122) || charCode <= 9) {
      rslt += String.fromCharCode(charCode);
    }
    makePureString(i + 1);
  };
  makePureString();

  const checkPalindrome = (i = 0) => {
    if (rslt[i] !== rslt[rslt.length - 1 - i]) {
      return false;
    }
    if (i >= rslt.length / 2) {
      return true;
    }
    return checkPalindrome(i + 1);
  };

  return checkPalindrome();
};

console.log(validPalindromeRecursion('A man, a plan, a canal: Panama'));

