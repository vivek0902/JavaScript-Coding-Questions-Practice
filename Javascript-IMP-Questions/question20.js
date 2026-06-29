//Polyfill for apply
//Explanation: The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object). It allows us to invoke a function with a specific context and pass arguments as an array, which can be useful when we have an array of values that we want to use as arguments for a function.
//Example usage of apply() method

//Example usage of apply() method
function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

const person = { name: "Alice" };
console.log(greet.apply(person, ["Hello", "!"])); // "Hello, Alice!"

//Polyfill for apply() method with different name say myApply

Function.prototype.myApply = function (thisArg, argsArray) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }
  // If thisArg is null or undefined, set it to the global object (window in browsers)
  thisArg = thisArg || globalThis;

  // Create a unique property on thisArg to avoid overwriting existing properties
  const uniqueProp = Symbol("fn");
  thisArg[uniqueProp] = this;
  const result = thisArg[uniqueProp](...argsArray);
  delete thisArg[uniqueProp];
  return result;
};

// Example usage of myApply method
function greet2(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

const person2 = { name: "Bob" };
console.log(greet2.myApply(person2, ["Hi", "?"])); // "Hi, Bob?"

//example with apply with arguments
function add(a, b) {
  return this.x + (a + b);
}

const obj = {
  x: 10,
};
console.log(add.myApply(obj, [5, 10])); // 25
