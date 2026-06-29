//Polyfill for Array.map()

//Example usage of Array.map() method
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((x) => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

//Polyfill for Array.map() method with different name say myMap

Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    //this checks if the array is null or undefined
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      //in checks if the index exists in the array, this is important for sparse arrays
      const element = this[i];
      result.push(callback.call(thisArg, element, i, this));
    }
  }
  return result;
};

// Example usage of myMap method
const numbers2 = [1, 2, 3, 4, 5];
const doubled2 = numbers2.myMap((x) => x * 2);
console.log(doubled2); // [2, 4, 6, 8, 10]

//example with map with thisArg
const obj = {
  multiplier: 3,
};

const numbers3 = [1, 2, 3, 4, 5];
const tripled = numbers3.myMap(function (x) {
  return x * this.multiplier; //Using thisArg to access the multiplier property of the obj
}, obj);

console.log(tripled); // [3, 6, 9, 12, 15]
