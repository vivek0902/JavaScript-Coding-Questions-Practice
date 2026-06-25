//find max/min in a given array in javascript

//method 1: Using Math.max and Math.min
function findMaxMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

const arr = [3, 5, 1, 8, 2, 7];
const result = findMaxMin(arr);
console.log(`Max: ${result.max}, Min: ${result.min}`);

//method 2: Using reduce to find max and min
function findMaxMinUsingReduce(arr) {
  const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
  const min = arr.reduce((acc, curr) => (curr < acc ? curr : acc), arr[0]);
  return { max, min };
}

const resultUsingReduce = findMaxMinUsingReduce(arr);
console.log(`Max: ${resultUsingReduce.max}, Min: ${resultUsingReduce.min}`);

//method 3: Using for loop to find max and min
function findMaxMinUsingForLoop(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

const resultUsingForLoop = findMaxMinUsingForLoop(arr);
console.log(`Max: ${resultUsingForLoop.max}, Min: ${resultUsingForLoop.min}`);
