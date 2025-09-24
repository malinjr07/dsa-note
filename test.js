const types = [
  ['rails'],
  ['restAPI', 'graphqlAPI'],
  ['sql', 'nosql'],
];

function combineArrayElements(arr) {
  // Check if the input array is empty
  if (arr.length === 0) return [];
  
  // Start with an array containing an empty string to build combinations
  let result = [''];
  
  // For each subarray in the input
  for (let i = 0; i < arr.length; i++) {
    const current = [];
    // For each existing combination
    for (let j = 0; j < result.length; j++) {
      // For each element in the current subarray
      for (let k = 0; k < arr[i].length; k++) {
        // Create a new combination by appending the current element
        current.push(result[j] + (result[j] ? '-' : '') + arr[i][k]);
      }
    }
    result = current;
  }
  
  return result.join(" ");
}

const result = combineArrayElements(types);
console.log('Result array:', result);

