// split Array items into individual words

const arr = ["Hello World", "JavaScript is awesome", "Split me into words"];
// output: ["Hello", "World", "JavaScript", "is", "awesome", "Split", "me", "into", "words"]

// Method 1: Using flatMap and split
function splitArrayIntoWordsUsingFlatMap(array) {
  return array.flatMap((item) => item.split(" "));
  //[["Hello", "World"], ["JavaScript", "is", "awesome"], ["Split", "me", "into", "words"]]
  //By item.split(" ") it become like ["Hello", "World"] | ["JavaScript", "is", "awesome"] | ["Split", "me", "into", "words"] and flatMap will flatten it into a single array and return it.
}

console.log(
  "Split array into words (using flatMap):",
  splitArrayIntoWordsUsingFlatMap(arr),
);

// Method 2: Using reduce and split
function splitArrayIntoWordsUsingReduce(array) {
  return array.reduce((acc, item) => {
    return acc.concat(item.split(" ")); // By item.split(" ") it become like ["Hello", "World"] | ["JavaScript", "is", "awesome"] | ["Split", "me", "into", "words"] and concat will merge it into a single array and return it.
  }, []);
}

console.log(
  "Split array into words (using reduce):",
  splitArrayIntoWordsUsingReduce(arr),
);

// Method 3: Using map and flat
function splitArrayIntoWordsUsingMapAndFlat(array) {
  return array.map((item) => item.split(" ")).flat();
  //By item.split(" ") it become like ["Hello", "World"] | ["JavaScript", "is", "awesome"] | ["Split", "me", "into", "words"] and flat will flatten it into a single array and return it.
}

console.log(
  "Split array into words (using map and flat):",
  splitArrayIntoWordsUsingMapAndFlat(arr),
);

// Method 4: Using for loop and split
function splitArrayIntoWordsUsingForLoop(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(...array[i].split(" "));
  }
  return result;
}

console.log(
  "Split array into words (using for loop):",
  splitArrayIntoWordsUsingForLoop(arr),
);
