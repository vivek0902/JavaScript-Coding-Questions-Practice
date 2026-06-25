//convert first letter of each word in a string in uppercase

const str = "hello world from javascript";

// method 1: Using split() and map()
function capitalizeFirstLetterUsingSplitAndMap(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 0) {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const capitalizedStringUsingSplitAndMap =
  capitalizeFirstLetterUsingSplitAndMap(str);
console.log(
  `Capitalized String (Using split() and map()): ${capitalizedStringUsingSplitAndMap}`,
);

// method 2: Using for loop
function capitalizeFirstLetterUsingForLoop(str) {
  let result = "";
  let capitalizeNext = true;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === " ") {
      result += char;
      capitalizeNext = true;
    } else if (capitalizeNext) {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }
  }
  return result;
}

const capitalizedStringUsingForLoop = capitalizeFirstLetterUsingForLoop(str);
console.log(
  `Capitalized String (Using for loop): ${capitalizedStringUsingForLoop}`,
);

// method 3: Using regular expressions
function capitalizeFirstLetterUsingRegex(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

const capitalizedStringUsingRegex = capitalizeFirstLetterUsingRegex(str);
console.log(
  `Capitalized String (Using regular expressions): ${capitalizedStringUsingRegex}`,
);

// method 4: Using reduce()
function capitalizeFirstLetterUsingReduce(str) {
  return str
    .split(" ")
    .reduce((acc, word) => {
      if (word.length === 0) {
        return acc + " ";
      }
      return acc + word[0].toUpperCase() + word.slice(1) + " ";
    }, "")
    .trim();
}

const capitalizedStringUsingReduce = capitalizeFirstLetterUsingReduce(str);
console.log(
  `Capitalized String (Using reduce()): ${capitalizedStringUsingReduce}`,
);
