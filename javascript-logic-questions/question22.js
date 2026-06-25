// find intersection of two arrays in javascript
// method 1: Using Set
function intersectionOfArraysUsingSet(arr1, arr2) {
  const set1 = new Set(arr1); // to store unique values from the first array
  const set2 = new Set(arr2); // to store unique values from the second array
  const intersection = new Set(); // to store the intersection values, why `new Set()` because we want to store unique values in the intersection
  for (const value of set1) {
    if (set2.has(value)) {
      intersection.add(value);
    }
  }
  return Array.from(intersection);
}

const intersectionUsingSet = intersectionOfArraysUsingSet([1, 2, 3], [3, 4, 5]);
console.log(`Intersection of Arrays (Using Set): ${intersectionUsingSet}`);

// method 2: Using filter() and includes()
function intersectionOfArraysUsingFilterAndIncludes(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

const intersectionUsingFilterAndIncludes =
  intersectionOfArraysUsingFilterAndIncludes([1, 2, 3], [3, 4, 5]);
console.log(
  `Intersection of Arrays (Using filter() and includes()): ${intersectionUsingFilterAndIncludes}`,
);

// method 3: Using for loop
function intersectionOfArraysUsingForLoop(arr1, arr2) {
  const intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}

const intersectionUsingForLoop = intersectionOfArraysUsingForLoop(
  [1, 2, 3],
  [3, 4, 5],
);
console.log(
  `Intersection of Arrays (Using for loop): ${intersectionUsingForLoop}`,
);

// method 4: Using reduce()
function intersectionOfArraysUsingReduce(arr1, arr2) {
  return arr1.reduce((acc, curr) => {
    if (arr2.includes(curr) && !acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

const intersectionUsingReduce = intersectionOfArraysUsingReduce(
  [1, 2, 3],
  [3, 4, 5],
);
console.log(
  `Intersection of Arrays (Using reduce()): ${intersectionUsingReduce}`,
);
