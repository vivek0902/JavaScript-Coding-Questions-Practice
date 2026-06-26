let a = 108;
let b = new Number(108);
let c = 108;

console.log(a == b); // Output: true
console.log(a === b); // Output: false
console.log(b == c); // Output: true
console.log(b === c); // Output: false

// Explanation:
// In this code snippet, we have three variables: a, b, and c. The variable a is a primitive number, b is an object created using the Number constructor, and c is another primitive number. When we use the == operator, JavaScript performs type coercion and compares the values of a and b, which are both 108, resulting in true. However, when we use the === operator, it checks for both value and type. Since a is a primitive number and b is an object, they are not strictly equal, resulting in false. Similarly, when comparing b and c with ==, it returns true because their values are equal after type coercion. But with ===, it returns false because b is an object and c is a primitive number.
