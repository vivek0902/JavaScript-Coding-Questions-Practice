// question 2: yield vs return in JavaScript
// In JavaScript, both yield and return are used in functions, but they serve different purposes and have different behaviors.
// return exits the function and returns a value, while yield pauses the function and returns a value, allowing it to be resumed later.

// Example of return:
function returnExample() {
  return "This is a return value.";
}

// Example of yield:
function* yieldExample() {
  yield "This is the first yield value.";
  yield "This is the second yield value.";
}

console.log(returnExample()); // Output: "This is a return value."
const generator = yieldExample();
console.log(generator.next().value); // Output: "This is the first yield value."
// console.log(generator.next().value); // Output: "This is the second yield value."

// Explanation:
// In the returnExample function, when the return statement is executed, the function exits and returns the specified value.
// In contrast, the yieldExample function is a generator function (indicated by the * after the function keyword).
// When yield is used, it pauses the execution of the generator function and returns a value to the caller.
// The generator can be resumed later from where it left off, allowing for multiple values to be yielded over time.
