//Currying
//Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of functions, each taking a single argument. It allows for partial application of functions, enabling you to create specialized functions by fixing some of the arguments.
//Example of a curried function that takes three arguments and returns their sum
const curriedFunction = (a) => (b) => (c) => a + b + c;

// Usage
const result1 = curriedFunction(1)(2)(3); // 6

console.log(result1); // 6

// Example 2

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
const result = multiply(2)(3)(4); // 24
console.log(result); // 24
