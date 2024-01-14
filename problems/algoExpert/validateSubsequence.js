/**
 * We will traverse the main array and keep finding the match with the subsequence's element sequently,
 * and we will count each match
 * If we find the count matches with the length of the subsequence, then we can return that the subsequence is valid
 */

function validateSubSequence(array, sequence) {
  let sequenceCount = 0;
  for (const value of array) {
    if (value === sequence[sequenceCount]) {
      sequenceCount++;
    }
    if (sequenceCount === sequence.length) {
      break;
    }
  }
  return sequenceCount === sequence.length;
}
