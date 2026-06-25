//compare two arrays equal or not

//method 1: Using JSON.stringify()
function compareArraysUsingJSONStringify(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const areArraysEqualUsingJSONStringify = compareArraysUsingJSONStringify(
  [1, 2, 3],
  [1, 2, 3],
);
console.log(
  `Are Arrays Equal (Using JSON.stringify()): ${areArraysEqualUsingJSONStringify}`,
);

//method 2: Using for loop
function compareArraysUsingForLoop(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const areArraysEqualUsingForLoop = compareArraysUsingForLoop(
  [1, 2, 3],
  [1, 2, 3],
);
console.log(`Are Arrays Equal (Using for loop): ${areArraysEqualUsingForLoop}`);

//method 3: Using every() method
function compareArraysUsingEvery(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}

const areArraysEqualUsingEvery = compareArraysUsingEvery([1, 2, 3], [1, 2, 3]);
console.log(
  `Are Arrays Equal (Using every() method): ${areArraysEqualUsingEvery}`,
);

//method 4: Using Set
function compareArraysUsingSet(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  if (set1.size !== set2.size) {
    return false;
  }
  for (const value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }
  return true;
}

const areArraysEqualUsingSet = compareArraysUsingSet([1, 2, 3], [1, 2, 3]);
console.log(`Are Arrays Equal (Using Set): ${areArraysEqualUsingSet}`);

//method 5: Using reduce
function compareArraysUsingReduce(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.reduce((acc, curr, index) => {
    if (curr !== arr2[index]) {
      return false;
    }
    return acc;
  }, true);
}

const areArraysEqualUsingReduce = compareArraysUsingReduce(
  [1, 2, 3],
  [1, 2, 3],
);
console.log(`Are Arrays Equal (Using reduce): ${areArraysEqualUsingReduce}`);

//method 6: Using filter
function compareArraysUsingFilter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const filteredArr = arr1.filter((value, index) => value === arr2[index]);
  return filteredArr.length === arr1.length;
}

const areArraysEqualUsingFilter = compareArraysUsingFilter(
  [1, 2, 3],
  [1, 2, 3],
);
console.log(`Are Arrays Equal (Using filter): ${areArraysEqualUsingFilter}`);
