//how to reverse a string in javascript

let str = "Hello, World!";
// method 1: Using built-in methods
function reverseStringUsingBuiltInMethods(str) {
  return str.split("").reverse().join("");
}

const reversedStringUsingBuiltInMethods = reverseStringUsingBuiltInMethods(str);
console.log(
  `Reversed String (Built-in Methods): ${reversedStringUsingBuiltInMethods}`,
);

// method 2: Using for loop
function reverseStringUsingForLoop(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const reversedStringUsingForLoop = reverseStringUsingForLoop(str);
console.log(`Reversed String (For Loop): ${reversedStringUsingForLoop}`);

// method 3: Using recursion
function reverseStringUsingRecursion(str) {
  if (str === "") {
    return "";
  }
  return str[str.length - 1] + reverseStringUsingRecursion(str.slice(0, -1));
}

const reversedStringUsingRecursion = reverseStringUsingRecursion(str);
console.log(`Reversed String (Recursion): ${reversedStringUsingRecursion}`);
