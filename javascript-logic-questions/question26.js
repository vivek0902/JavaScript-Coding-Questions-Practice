//How to Check the No of Occurrence of Character in String
const str = "hello world";
const char = "l";

// method 1: Using for loop
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === char) {
    count++;
  }
}

console.log(`The character '${char}' occurs ${count} times in the string.`);

// method 2: Using split() method
function countCharacterOccurrencesUsingSplit(str, char) {
  return str.split(char).length - 1; // string.split(char) will create an array of substrings, and the number of occurrences of the character is equal to the length of the array minus 1.
}

const countUsingSplit = countCharacterOccurrencesUsingSplit(str, char);
console.log(
  `The character '${char}' occurs ${countUsingSplit} times in the string (Using split()):`,
);

// method 3: Using regular expressions
function countCharacterOccurrencesUsingRegex(str, char) {
  const regex = new RegExp(char, "g"); // Create a regular expression to match the character globally
  const matches = str.match(regex); // Use the match() method to find all occurrences of the character
  return matches ? matches.length : 0; // Return the number of matches found, or 0 if no matches were found
}

const countUsingRegex = countCharacterOccurrencesUsingRegex(str, char);
console.log(
  `The character '${char}' occurs ${countUsingRegex} times in the string (Using regex):`,
);

// method 4: Using reduce() method
function countCharacterOccurrencesUsingReduce(str, char) {
  return str.split("").reduce((count, currentChar) => {
    return currentChar === char ? count + 1 : count;
  }, 0);
}

const countUsingReduce = countCharacterOccurrencesUsingReduce(str, char);
console.log(
  `The character '${char}' occurs ${countUsingReduce} times in the string (Using reduce()):`,
);
