//find second Largest value in array

// sample input array
const arr = [3, 5, 1, 8, 2, 7];

//method 1: Using for loop
function findSecondLargestUsingForLoop(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

const secondLargestUsingForLoop = findSecondLargestUsingForLoop(arr);
console.log(`Second Largest: ${secondLargestUsingForLoop}`);

//method 2: Using Set and sort
function findSecondLargestUsingSet(arr) {
  const uniqueArr = [...new Set(arr)];
  const sortedArr = uniqueArr.sort((a, b) => b - a);
  return sortedArr[1];
}

const secondLargestUsingSet = findSecondLargestUsingSet(arr);
console.log(`Second Largest: ${secondLargestUsingSet}`);

//method 3: Using filter and Math.max
function findSecondLargestUsingFilter(arr) {
  const max = Math.max(...arr);
  const secondLargest = arr.filter((num) => num < max);
  return Math.max(...secondLargest);
}

const secondLargestUsingFilter = findSecondLargestUsingFilter(arr);
console.log(`Second Largest: ${secondLargestUsingFilter}`);

//method 4: Using reduce
function findSecondLargestUsingReduce(arr) {
  const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
  const secondLargest = arr.reduce((acc, curr) => {
    if (curr < max && curr > acc) {
      return curr;
    }

    return acc;
  }, -Infinity);
  return secondLargest;
}

const secondLargestUsingReduce = findSecondLargestUsingReduce(arr);
console.log(`Second Largest: ${secondLargestUsingReduce}`);
