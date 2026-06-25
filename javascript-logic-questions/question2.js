//question: Flatten an array of arrays into a single array. For example, given the input [[1, 2], [3, 4], [5]], the output should be [1, 2, 3, 4, 5].
let arr = [[1, 2], [3, 4], [5]];

// Function to flatten an array of arrays method 1
function flattenArray(array) {
  return array.reduce((acc, val) => acc.concat(val), []);
}

console.log("Flattened array (method 1):", flattenArray(arr));

// Function to flatten an array of arrays method 2
function flattenArrayUsingFlat(array) {
  return array.flat();
}

console.log("Flattened array (method 2):", flattenArrayUsingFlat(arr));

// Function to flatten an array of arrays method 3 arr.push(...val) is used to push all elements of val into acc. The initial value of acc is an empty array [].
function flattenArrayUsingPush(array) {
  return array.reduce((acc, val) => {
    acc.push(...val);
    return acc;
  }, []);
}

console.log("Flattened array (method 3):", flattenArrayUsingPush(arr));
