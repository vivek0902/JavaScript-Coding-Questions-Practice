//question7: Find Items that exist only once in an array
let arr = [1, 2, 3, 2, 4, 1, 5];

// Method 1: Using filter and indexOf
function findUniqueItemsUsingFilter(array) {
  return array.filter(
    (item) => array.indexOf(item) === array.lastIndexOf(item),
  );
}

console.log("Items that exist only once:", findUniqueItemsUsingFilter(arr));

// Method 2: Using reduce and includes
function findUniqueItemsUsingReduce(array) {
  return array.reduce((acc, item) => {
    if (
      !acc.includes(item) &&
      array.indexOf(item) === array.lastIndexOf(item)
    ) {
      acc.push(item);
    }
    return acc;
  }, []);
}

console.log(
  "Items that exist only once (using reduce):",
  findUniqueItemsUsingReduce(arr),
);

// Method 3: Using a frequency map
function findUniqueItemsUsingFrequencyMap(array) {
  const frequencyMap = {};
  array.forEach((item) => {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
  });
  return Object.keys(frequencyMap)
    .filter((item) => frequencyMap[item] === 1)
    .map(Number);
}

console.log(
  "Items that exist only once (using frequency map):",
  findUniqueItemsUsingFrequencyMap(arr),
);

// Method 4: Using a Set to track seen items
function findUniqueItemsUsingSet(array) {
  const seen = new Set(); // Track items that have been seen
  const uniqueItems = new Set(); // Track items that are unique
  array.forEach((item) => {
    if (seen.has(item)) {
      uniqueItems.delete(item);
    } else {
      seen.add(item);
      uniqueItems.add(item);
    }
  });
  return Array.from(uniqueItems); // Convert the Set of unique items back to an array
}

console.log(
  "Items that exist only once (using Set):",
  findUniqueItemsUsingSet(arr),
);

// Method 5: Using a Map to track counts
function findUniqueItemsUsingMap(array) {
  const countMap = new Map();
  array.forEach((item) => {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  });
  return Array.from(countMap.entries())
    .filter(([item, count]) => count === 1)
    .map(([item]) => item);
}

console.log(
  "Items that exist only once (using Map):",
  findUniqueItemsUsingMap(arr),
);

// Method 6: Using a for loop to count occurrences
function findUniqueItemsUsingForLoop(array) {
  const countMap = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    countMap[item] = (countMap[item] || 0) + 1;
  }
  return Object.keys(countMap)
    .filter((item) => countMap[item] === 1)
    .map(Number);
}

console.log(
  "Items that exist only once (using for loop):",
  findUniqueItemsUsingForLoop(arr),
);
