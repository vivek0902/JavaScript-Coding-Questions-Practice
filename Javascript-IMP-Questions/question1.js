// how to flatten a nested array in javascript
// //method 1: Using flat() method
const nestedArr = [1, [2, [3, 4], 5], 6];
const flattenedArr = nestedArr.flat(Infinity); // Specify the depth level to flatten
console.log(flattenedArr); // Output: [1, 2, 3, 4, 5, 6]

//method 2: using toString() method
const nestedArr1 = [1, [2, [3, 4], 5], 6];
const flattenedArr1 = nestedArr1.toString().split(",").map(Number);
console.log(flattenedArr1); // output: [1, 2, 3, 4, 5, 6]

//method 3: Using recursion
function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
const nestedArr2 = [1, [2, [3, 4], 5], 6];
const flattenedArr2 = flattenArray(nestedArr2);
console.log(flattenedArr2); // output: [1, 2, 3, 4, 5, 6]

//method 4: Using reduce() method
function flattenArray(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
}

const nestedArr3 = [1, [2, [3, 4], 5], 6];
const flattenedArr3 = flattenArray(nestedArr3);
console.log(flattenedArr3); // output: [1, 2, 3, 4, 5, 6]
