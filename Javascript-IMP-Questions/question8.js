//Function Composition
//Explanation: Function composition is a programming technique where multiple functions are combined to create a new function. The output of one function becomes the input of the next function in the composition chain. This allows for modular and reusable code, as well as the ability to build complex operations by combining simpler functions.
function compose(...funcs) {
  return function (initialValue) {
    return funcs.reduceRight((acc, func) => func(acc), initialValue);
  };
}

// Example usage:
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const subtract = (x) => x - 3;

const composedFunction = compose(add, multiply, subtract);
console.log(composedFunction(5)); // Output: 12 (5 + 1 = 6, 6 * 2 = 12, 12 - 3 = 9)
