/**
 * # Print Name N times using Recursion
 *
 */

const printName = (reps, userName) => {
  console.log(userName);
  if (reps === 1) return;

  printName(reps - 1, userName);
};

printName(5, 'Maruf');

