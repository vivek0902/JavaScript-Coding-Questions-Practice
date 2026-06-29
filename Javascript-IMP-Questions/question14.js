//Polyfill for Array.filter()

//Example usage of Array.filter() method
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4]

//Polyfill for Array.filter() method with different name say myFilter

Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    //this checks if the array is null or undefined
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const element = this[i];
      if (callback.call(thisArg, element, i, this)) {
        result.push(element);
      }
    }
  }
  return result;
};

// Example usage of myFilter method
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers2 = numbers2.myFilter((x) => x % 2 === 0);
console.log(evenNumbers2); // [2, 4]

//example with filter with thisArg
const obj = {
  threshold: 3,
};

const numbers3 = [1, 2, 3, 4, 5];
const filteredNumbers = numbers3.myFilter(function (x) {
  return x > this.threshold; //Using thisArg to access the threshold property of the obj
}, obj);

console.log(filteredNumbers); // [4, 5]
