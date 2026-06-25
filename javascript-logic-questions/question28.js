// Bubble Sort - Sort an array using bubble sort algorithm

const arr = [64, 34, 25, 12, 22, 11, 90];

// Method 1: Using Bubble Sort with nested for loops
function bubbleSortUsingNestedLoops(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("Sorted Array (Using Bubble Sort):", bubbleSortUsingNestedLoops([...arr]));

// Method 2: Bubble Sort with optimization (early exit if sorted)
function bubbleSortOptimized(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break; // If no swaps occurred, array is sorted
  }
  return arr;
}

console.log("Sorted Array (Using Optimized Bubble Sort):", bubbleSortOptimized([...arr]));

// Method 3: Using JavaScript's built-in sort()
function sortUsingBuiltIn(arr) {
  return arr.sort((a, b) => a - b);
}

console.log("Sorted Array (Using Built-in sort()):", sortUsingBuiltIn([...arr]));
