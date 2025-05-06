/**
 * # Print N to 1 using Recursion
 *
 */

const printNums = (startNum, endNum) => {
  if (startNum > endNum) return;
  console.log(endNum);
  printNums(startNum, endNum - 1);
};

printNums(1, 5);

