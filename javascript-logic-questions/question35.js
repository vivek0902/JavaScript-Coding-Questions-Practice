// Rotate array to the right by k positions

const arr = [1, 2, 3, 4, 5];
const k = 2;

// Method 1: Using slice and concatenation
function rotateArrayUsingSlice(arr, k) {
  const actualK = k % arr.length; // Handle k > array length
  return arr.slice(-actualK).concat(arr.slice(0, -actualK));
}

console.log(
  `Rotated array (Using slice): ${rotateArrayUsingSlice([...arr], k)}`,
);

// Method 2: Using spread operator and array methods
function rotateArrayUsingSplice(arr, k) {
  const actualK = k % arr.length;
  const newArr = [...arr];
  for (let i = 0; i < actualK; i++) {
    newArr.unshift(newArr.pop()); // Move last element to front
  }
  return newArr;
}

console.log(
  `Rotated array (Using splice): ${rotateArrayUsingSplice([...arr], k)}`,
);

// Method 3: Using reverse (3-step reversal algorithm)
function rotateArrayUsingReverse(arr, k) {
  const actualK = k % arr.length;
  const newArr = [...arr];

  // Reverse entire array
  newArr.reverse();

  // Reverse first k elements
  let left = 0,
    right = actualK - 1;
  while (left < right) {
    [newArr[left], newArr[right]] = [newArr[right], newArr[left]];
    left++;
    right--;
  }

  // Reverse remaining elements
  left = actualK;
  right = newArr.length - 1;
  while (left < right) {
    [newArr[left], newArr[right]] = [newArr[right], newArr[left]];
    left++;
    right--;
  }

  return newArr;
}

console.log(
  `Rotated array (Using reverse): ${rotateArrayUsingReverse([...arr], k)}`,
);

// Method 4: Using a for loop with modulo
function rotateArrayUsingLoop(arr, k) {
  const actualK = k % arr.length;
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[(i + actualK) % arr.length] = arr[i];
  }
  return result;
}

console.log(
  `Rotated array (Using for loop): ${rotateArrayUsingLoop([...arr], k)}`,
);
