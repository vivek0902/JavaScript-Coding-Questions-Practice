// shalow copy of object

//Method 1: Spread Operator
const originalObject = { a: 1, b: 2, c: 3 };
const shallowCopy1 = { ...originalObject };
console.log(shallowCopy1); // Output: { a: 1, b: 2, c: 3 }

//Limitation: The spread operator creates a shallow copy, meaning that nested objects or arrays will still reference the same memory location as the original object. Changes made to nested objects in the copy will affect the original object.

//Method 2: Object.assign()
const originalObject2 = { a: 1, b: 2, c: 3 };
const shallowCopy2 = Object.assign({}, originalObject2);
console.log(shallowCopy2); // Output: { a: 1, b: 2, c: 3 }

//Limitation: Similar to the spread operator, Object.assign() creates a shallow copy. Nested objects or arrays will still reference the same memory location as the original object, leading to potential unintended side effects when modifying nested structures in the copy.

//Method 3: Using a custom function
function shallowCopy(obj) {
  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // object.hasOwnProperty() is used to check if the property belongs to the object itself and not its prototype chain. This ensures that only the object's own properties are copied, avoiding any inherited properties from being included in the shallow copy.
      copy[key] = obj[key];
    }
  }
  return copy;
}

const originalObject4 = { a: 1, b: 2, c: 3 };
const shallowCopy4 = shallowCopy(originalObject4);
console.log(shallowCopy4); // Output: { a: 1, b: 2, c: 3 }

//Limitation: This method also creates a shallow copy, and nested objects or arrays will still reference the same memory location as the original object. Changes made to nested objects in the copy will affect the original object.
