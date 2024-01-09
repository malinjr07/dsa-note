/**
 * Two Pointer Approach
 * One Pointer will count to the array index
 * another pointer will count to the sequence index
 * Both counter will work as index as well
 * we will keep traversing the main array
 * the loop will go on until we reach the length of either the Array or the Sequence
 * if we find match between an element of the array and an element of the sequence, we will increase the sequence counter
 * otherwise, we will keep traversing the array
 */

function twoPointerSequenceValidator(array = [], sequence = []) {
  let sequenceCount = 0;
  let arrayIndex = 0;
  while (sequenceCount < sequence.length && arrayIndex < array.length) {
    if (sequence[sequenceCount] === array[arrayIndex]) {
      sequenceCount++;
    }
    arrayIndex++;
  }
  return sequenceCount === sequence.length;
}

/**
 * Simple Approach
 * we will take one pointer, which will represent the last matching index of the sequence
 * We will Traverse the array
 * if we find the matched sequence element index equal to the sequence array length, we will break the loop (No Need to traverse further as the sequence already matched)
 * If we find an element of the array matched with the sequence current comparing element, we will increase the sequence element index
 * Finally, the result will be the compare between the last matching index and the sequence length
 */

function sequenceValidatorByCounter(array = [], sequence = []) {
  let sequenceIndex = 0;
  for (const item of array) {
    if (sequenceIndex === sequence.length) {
      break;
    }
    if (sequence[sequenceIndex] === item) {
      sequenceIndex++;
    }
  }
  return sequenceIndex === sequence.length;
}
