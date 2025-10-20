// Given Row & Column, Return the element

const bruteForce = (row = 0, col = 0) => {
  if (row < col) return 0;
  let ans = 1;
  for (let i = 0; i < col - 1; i++) {
    ans = (ans * (row - i - 1)) / (i + 1);
  }
  return ans;
};

console.log(bruteForce(8, 5));

// print any given row

const pascalRow = (n = 0) => {
  const output = [1];
  for (let i = 1; i < n; i++) {
    const element = (output[i - 1] * (n - i)) / i;
    output.push(element);
  }
  return output;
};

console.log(pascalRow(8));

const pascalTriangle = (numRows = 0) => {
  const res = [[1]];
  for (let i = 2; i <= numRows; i++) {
    const output = [1];
    for (let j = 1; j < i; j++) {
      const element = (output[j - 1] * (i - j)) / j;
      output.push(element);
    }
    res.push(output);
  }
  return res;
};

console.log(pascalTriangle(8));

const pascalTwoPointer = (numRows = 0) => {
  const res = [[1]];
  for (let i = 1; i < numRows; i++) {
    const tempArr = [];
    const prevArr = [...res[i - 1]];
    prevArr.push(0);
    prevArr.unshift(0);
    for (let i = 1; i < prevArr.length; i++) {
      const nextElement = prevArr[i];
      const curElement = prevArr[i - 1];
      const newElement = nextElement + curElement;
      tempArr.push(newElement);
    }
    res.push(tempArr);
  }
  return res;
};

console.log('pascal Two Pointer', pascalTwoPointer(8));

