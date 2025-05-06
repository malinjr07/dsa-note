/**
 * # Print 1 to N
 *
 */

const printNums = (startNum, endNum) => {
  if (startNum > endNum) return;
  console.log(startNum);
  printNums(startNum + 1, endNum);
};

printNums(1, 5);

