//Pipe Function

//Explanation: The pipe function is a programming technique that allows you to combine multiple functions into a single function. It takes a series of functions as arguments and returns a new function that, when called, passes the input through each of the provided functions in order. This allows for a more readable and functional approach to processing data, as it enables you to create a pipeline of transformations.
function pipe(...funcs) {
  return function (initialValue) {
    return funcs.reduce((acc, func) => func(acc), initialValue);
  };
}

// Example usage:
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const subtract = (x) => x - 3;

const pipedFunction = pipe(add, multiply, subtract);
console.log(pipedFunction(5)); // Output: 9 (5 + 1 = 6, 6 * 2 = 12, 12 - 3 = 9)

//Note: The pipe function is similar to function composition, but it applies the functions from left to right, while composition applies them from right to left. In this example, the `pipe` function takes three functions (`add`, `multiply`, and `subtract`) and creates a new function that processes the input value through each of these functions in order.
