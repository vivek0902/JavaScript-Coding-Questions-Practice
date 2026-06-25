//question 4: remove dublicates from an array. For example, given the input [1, 2, 3, 2, 4, 1], the output should be [1, 2, 3, 4].

let arr = [1, 2, 3, 2, 4, 1];
// Method 1: Function to remove duplicates from an array using Set
function removeDuplicatesUsingSet(array) {
  return [...new Set(array)];
}

console.log(
  "Array without duplicates (using Set):",
  removeDuplicatesUsingSet(arr),
);

// Method 2: Function to remove duplicates from an array using filter
function removeDuplicatesUsingFilter(array) {
  return array.filter(
    (value, index, originalArray) => originalArray.indexOf(value) === index,
  );
}

console.log(
  "Array without duplicates (using filter):",
  removeDuplicatesUsingFilter(arr),
);

// Method 3: Function to remove duplicates from an array using reduce
function removeDuplicatesUsingReduce(array) {
  return array.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }
    return acc;
  }, []);
}

console.log(
  "Array without duplicates (using reduce):",
  removeDuplicatesUsingReduce(arr),
);
