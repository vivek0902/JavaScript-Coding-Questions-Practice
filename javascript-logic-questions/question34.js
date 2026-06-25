// Find the Kth largest element in an array

const arr = [3, 7, 5, 8, 2, 1, 9, 4, 6];
const k = 3;

// Method 1: Using sort() (descending order)
function findKthLargestUsingSorting(arr, k) {
  if (k <= 0 || k > arr.length) return null;
  const sortedArr = arr.sort((a, b) => b - a); // Sort in descending order
  return sortedArr[k - 1];
}

console.log(
  `${k}th largest element (Using sorting): ${findKthLargestUsingSorting([...arr], k)}`,
);

// Method 2: Using Set to remove duplicates and then sort
function findKthLargestWithoutDuplicates(arr, k) {
  const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
  if (k > uniqueArr.length) return null;
  return uniqueArr[k - 1];
}

console.log(
  `${k}th largest element (Without duplicates): ${findKthLargestWithoutDuplicates([...arr], k)}`,
);

// Method 3: Using reduce() to find kth largest
function findKthLargestUsingReduce(arr, k) {
  if (k <= 0 || k > arr.length) return null;
  let largestValues = [];
  arr.reduce((acc, curr) => {
    largestValues.push(curr);
    largestValues.sort((a, b) => b - a);
    if (largestValues.length > k) largestValues.pop();
    return acc;
  }, null);
  return largestValues[k - 1];
}

console.log(
  `${k}th largest element (Using reduce): ${findKthLargestUsingReduce(arr, k)}`,
);

// Method 4: Using Math.max repeatedly (inefficient but simple)
function findKthLargestUsingMax(arr, k) {
  const temp = [...arr];
  for (let i = 0; i < k - 1; i++) {
    const max = Math.max(...temp);
    temp.splice(temp.indexOf(max), 1);
  }
  return Math.max(...temp);
}

console.log(
  `${k}th largest element (Using Math.max): ${findKthLargestUsingMax([...arr], k)}`,
);
