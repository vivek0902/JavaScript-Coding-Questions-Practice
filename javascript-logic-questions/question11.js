// Find missing elements in a given Array 1 to 10

const arr = [1, 2, 3, 5, 6, 8, 9];

//method 1: Using for loop and includes
function findMissingElementsUsingForLoop(arr) {
  const missingElements = [];
  for (let i = 1; i <= 10; i++) {
    if (!arr.includes(i)) {
      missingElements.push(i);
    }
  }
  return missingElements;
}

const missingElementsUsingForLoop = findMissingElementsUsingForLoop(arr);
console.log(
  `Missing elements (using for loop): ${missingElementsUsingForLoop}`,
);

//method 2: Using filter and includes
function findMissingElementsUsingFilter(arr) {
  return Array.from({ length: 10 }, (_, i) => i + 1).filter(
    (num) => !arr.includes(num),
  );
}

const missingElementsUsingFilter = findMissingElementsUsingFilter(arr);
console.log(`Missing elements (using filter): ${missingElementsUsingFilter}`);

//method 3: Using Set and for loop
function findMissingElementsUsingSet(arr) {
  const set = new Set(arr);
  const missingElements = [];
  for (let i = 1; i <= 10; i++) {
    if (!set.has(i)) {
      missingElements.push(i);
    }
  }
  return missingElements;
}

const missingElementsUsingSet = findMissingElementsUsingSet(arr);
console.log(`Missing elements (using Set): ${missingElementsUsingSet}`);
