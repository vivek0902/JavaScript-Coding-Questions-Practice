//Polyfill for bind()
//Explanation: The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// we can bind a function to a specific object, allowing us to control the context in which the function is executed. This is particularly useful when working with event handlers or callbacks, where the value of this may not be what we expect.

//Example usage of bind() method
const obj = {
  x: 42,
};

const boundFunc = function () {
  console.log(this.x);
}.bind(obj);

boundFunc(); // 42

//Polyfill for bind() method with different name say myBind

Function.prototype.myBind = function (thisArg, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }
  const func = this;
  return function (...newArgs) {
    return func.apply(thisArg, [...args, ...newArgs]);
  };
};

// Example usage of myBind method
const obj2 = {
  x: 100,
};

const boundFunc2 = function () {
  console.log(this.x);
}.myBind(obj2);

boundFunc2(); // 100

//example with bind with arguments
const obj3 = {
  x: 10,
};

const boundFunc3 = function (y) {
  console.log(this.x + y);
}.myBind(obj3, 5);

boundFunc3(); // 15
