//Deep flatten object Javascript

function deepFlatten(obj) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const flattened = deepFlatten(obj[key]);
      for (const subKey in flattened) {
        result[`${key}.${subKey}`] = flattened[subKey];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

// Example usage:
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};

const flattenedObject = deepFlatten(nestedObject);
console.log(flattenedObject);
// Output: { a: 1, "b.c": 2, "b.d.e": 3, "b.d.f": 4, g: 5 }
