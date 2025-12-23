const optimalSolution = (s = '', goal = '') => {
  if (s.length !== goal.length) {
    return false;
  }
  if ((s + s).includes(goal)) {
    return true;
  } else {
    return false;
  }
};

console.log(optimalSolution());

