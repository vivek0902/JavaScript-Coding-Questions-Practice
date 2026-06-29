// polyfill by call()

//Example usage of call() method
function greet() {
  return `Hello, ${this.name}`;
}

const person = { name: "Alice" };
console.log(greet.call(person)); // "Hello, Alice"

//Polyfill for call() method with different name say myCall

Function.prototype.myCall = function (thisArg, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }

  // If thisArg is null or undefined, set it to the global object (window in browsers)
  thisArg = thisArg || globalThis;

  // Create a unique property on thisArg to avoid overwriting existing properties
  const uniqueProp = Symbol("fn");
  thisArg[uniqueProp] = this;
  const result = thisArg[uniqueProp](...args);
  delete thisArg[uniqueProp];
  return result;
};

// Example usage of myCall method
function greet2() {
  return `Hello, ${this.name}`;
}

const person2 = { name: "Bob" };
console.log(greet2.myCall(person2)); // "Hello, Bob"

//example with call with arguments
function add(a, b) {
  return this.x + (a + b);
}

const obj = {
  x: 10,
};
console.log(add.myCall(obj, 5, 10)); // 25
