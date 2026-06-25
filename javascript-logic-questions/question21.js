// find union of two arrays in javascript
// method 1: Using Set
function unionOfArraysUsingSet(arr1, arr2) {
  const set = new Set([...arr1, ...arr2]);
  return Array.from(set);
}

const unionUsingSet = unionOfArraysUsingSet([1, 2, 3], [3, 4, 5]);
console.log(`Union of Arrays (Using Set): ${unionUsingSet}`);

// method 2: Using concat() and filter()
function unionOfArraysUsingConcatAndFilter(arr1, arr2) {
  const concatenatedArray = arr1.concat(arr2);
  return concatenatedArray.filter(
    (value, index, self) => self.indexOf(value) === index, // filtering unique values
  );
}

const unionUsingConcatAndFilter = unionOfArraysUsingConcatAndFilter(
  [1, 2, 3],
  [3, 4, 5],
);
console.log(
  `Union of Arrays (Using concat() and filter()): ${unionUsingConcatAndFilter}`,
);

// method 3: Using for loop
function unionOfArraysUsingForLoop(arr1, arr2) {
  const unionArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!unionArray.includes(arr1[i])) {
      unionArray.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!unionArray.includes(arr2[i])) {
      unionArray.push(arr2[i]);
    }
  }
  return unionArray;
}

const unionUsingForLoop = unionOfArraysUsingForLoop([1, 2, 3], [3, 4, 5]);
console.log(`Union of Arrays (Using for loop): ${unionUsingForLoop}`);
