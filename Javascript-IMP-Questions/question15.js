//Polyfill for Array.reduce()

//Example usage of Array.reduce() method
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum); // 15

//Polyfill for Array.reduce() method with different name say myReduce

Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    //this checks if the array is null or undefined
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      //in checks if the index exists in the array, this is important for sparse arrays
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// Example usage of myReduce method
const numbers2 = [1, 2, 3, 4, 5];
const sum2 = numbers2.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum2); // 15

//example with reduce with initialValue
const numbers3 = [1, 2, 3, 4, 5];
const product = numbers3.myReduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1,
);
console.log(product); // 120
