// Binary Search - Find an element in a sorted array

const sortedArr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78];
const target = 23;

// Method 1: Binary Search using while loop (Iterative)
function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Element found at index mid
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in right half
    } else {
      right = mid - 1; // Search in left half
    }
  }
  return -1; // Element not found
}

console.log(`Binary Search (Iterative) - Index of ${target}:`, binarySearchIterative(sortedArr, target));

// Method 2: Binary Search using Recursion
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

console.log(`Binary Search (Recursive) - Index of ${target}:`, binarySearchRecursive(sortedArr, target));

// Method 3: Binary Search with additional info (found or not found)
function binarySearchWithInfo(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return { found: true, index: mid };
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return { found: false, index: -1, message: `${target} not found in array` };
}

console.log(`Binary Search (With Info) - ${target}:`, binarySearchWithInfo(sortedArr, target));
