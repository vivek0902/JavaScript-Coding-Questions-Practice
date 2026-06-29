//Polyfill for Array.forEach()

//Example usage of Array.forEach() method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((x) => console.log(x * 2)); // 2, 4, 6, 8, 10

//Polyfill for Array.forEach() method with different name say myForEach

Array.prototype.myForEach = function (callback, thisArg) {
  if (this == null) {
    //this checks if the array is null or undefined
    throw new TypeError(
      "Array.prototype.myForEach called on null or undefined",
    );
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      //in checks if the index exists in the array, this is important for sparse arrays
      callback.call(thisArg, this[i], i, this);
    }
  }
};

// Example usage of myForEach method
const numbers2 = [1, 2, 3, 4, 5];
numbers2.myForEach((x) => console.log(x * 2)); // 2, 4, 6, 8, 10

//example with forEach with thisArg
const obj = {
  multiplier: 3,
};

const numbers3 = [1, 2, 3, 4, 5];
numbers3.myForEach(function (x) {
  console.log(x * this.multiplier); //Using thisArg to access the multiplier property of the obj
}, obj);
