// Deep copy of object

//Method 1: Using JSON.parse() and JSON.stringify()
const originalObject5 = { a: 1, b: { c: 2 } };
const deepCopy1 = JSON.parse(JSON.stringify(originalObject5));
console.log(deepCopy1); // Output: { a: 1, b: { c: 2 } }

//Limitation: This method creates a deep copy of the object, but it has limitations. It cannot handle functions, undefined values, or circular references. Additionally, it may not preserve certain data types like Date objects or custom classes.

//Method 2: Using a custom recursive function
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return the value if it's not an object
  }
  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // object.hasOwnProperty() is used to check if the property belongs to the object itself and not its prototype chain. This ensures that only the object's own properties are copied, avoiding any inherited properties from being included in the deep copy.
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const originalObject6 = { a: 1, b: { c: 2 } };
const deepCopy2 = deepCopy(originalObject6);
console.log(deepCopy2); // Output: { a: 1, b: { c: 2 } }

//Limitation: This method creates a deep copy of the object, but it may not handle certain edge cases like circular references or special data types. It also requires more code and may be less efficient for large objects compared to other methods.

//Method 3: Using structuredClone() (available in modern browsers)
const originalObject7 = { a: 1, b: { c: 2 } };
const deepCopy3 = structuredClone(originalObject7);
console.log(deepCopy3); // Output: { a: 1, b: { c: 2 } }

//Limitation: structuredClone() creates a deep copy of the object and can handle various data types, including circular references. However, it may not be supported in older browsers or environments that do not implement this method.

//Method 4: Using a library like Lodash
// Lodash provides a convenient method called _.cloneDeep() for deep copying objects. It handles various edge cases and is widely used in JavaScript projects.

// Example usage:
// const _ = require('lodash'); // Make sure to install Lodash first
// const originalObject8 = { a: 1, b: { c: 2 } };
// const deepCopy4 = _.cloneDeep(originalObject8);
// console.log(deepCopy4); // Output: { a: 1, b: { c: 2 } }
