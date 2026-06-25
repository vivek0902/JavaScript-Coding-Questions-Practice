//merge two arrays

//method 1: Using concat() method
function mergeUsingConcat(arr1, arr2) {
  return arr1.concat(arr2);
}

const mergedArrayUsingConcat = mergeUsingConcat([1, 2, 3], [4, 5, 6]);
console.log(`Merged Array (Using concat): ${mergedArrayUsingConcat}`);

//method 2: Using spread operator
function mergeUsingSpreadOperator(arr1, arr2) {
  return [...arr1, ...arr2];
}

const mergedArrayUsingSpreadOperator = mergeUsingSpreadOperator(
  [1, 2, 3],
  [4, 5, 6],
);
console.log(
  `Merged Array (Using spread operator): ${mergedArrayUsingSpreadOperator}`,
);

//method 3: Using for loop
function mergeUsingForLoop(arr1, arr2) {
  const mergedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    mergedArray.push(arr2[i]);
  }
  return mergedArray;
}

const mergedArrayUsingForLoop = mergeUsingForLoop([1, 2, 3], [4, 5, 6]);
console.log(`Merged Array (Using for loop): ${mergedArrayUsingForLoop}`);

//method 4: Using reduce
function mergeUsingReduce(arr1, arr2) {
  return arr1.reduce(
    (acc, curr) => {
      acc.push(curr);
      return acc;
    },
    arr2.reduce((acc, curr) => {
      acc.push(curr);
      return acc;
    }, []),
  );
}

const mergedArrayUsingReduce = mergeUsingReduce([1, 2, 3], [4, 5, 6]);
console.log(`Merged Array (Using reduce): ${mergedArrayUsingReduce}`);

//method 5: Using forEach
function mergeUsingForEach(arr1, arr2) {
  const mergedArray = [];
  arr1.forEach((item) => mergedArray.push(item));
  arr2.forEach((item) => mergedArray.push(item));
  return mergedArray;
}

const mergedArrayUsingForEach = mergeUsingForEach([1, 2, 3], [4, 5, 6]);
console.log(`Merged Array (Using forEach): ${mergedArrayUsingForEach}`);

//method 6: Using map
function mergeUsingMap(arr1, arr2) {
  const mergedArray = [];
  arr1.map((item) => mergedArray.push(item));
  arr2.map((item) => mergedArray.push(item));
  return mergedArray;
}

const mergedArrayUsingMap = mergeUsingMap([1, 2, 3], [4, 5, 6]);
console.log(`Merged Array (Using map): ${mergedArrayUsingMap}`);

//method 7: Using flat
function mergeUsingFlat(arr1, arr2) {
  return [arr1, arr2].flat();
}

const mergedArrayUsingFlat = mergeUsingFlat([1, 2, 3], [4, 5, 6]);
console.log(`Merged Array (Using flat): ${mergedArrayUsingFlat}`);
