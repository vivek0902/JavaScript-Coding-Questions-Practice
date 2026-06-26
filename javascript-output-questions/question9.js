/* 
Type Coercion:

[] + []
[] + {}
{} + []
true + true
null + 1
undefined + 1
"5" - 2
"5" + 2
!!"false"
Boolean([])
Boolean({})
Boolean("")
*/

// question 9: What is the output of the following expressions in JavaScript?
console.log([] + []); // Output: "" (an empty string)
// Explanation: When two empty arrays are concatenated using the + operator, they are converted to strings, resulting in an empty string.

console.log([] + {}); // Output: "[object Object]" (an empty array concatenated with an object results in a string representation of the object)
// Explanation: When an empty array is concatenated with an object using the + operator, the empty array is converted to an empty string, and the object is converted to its string representation, which is "[object Object]".

console.log({} + []); // Output: 0 (an empty object concatenated with an empty array results in 0)
// Explanation: When an empty object is concatenated with an empty array using the + operator, the empty object is converted to a string representation of "[object Object]", and the empty array is converted to an empty string. The result is "0" because the string representation of an empty object is coerced to 0 when used in a numeric context.

console.log(true + true); // Output: 2 (true is coerced to 1, so 1 + 1 = 2)
console.log(null + 1); // Output: 1 (null is coerced to 0, so 0 + 1 = 1)
console.log(undefined + 1); // Output: NaN (undefined is coerced to NaN, so NaN + 1 = NaN)
console.log("5" - 2); // Output: 3 (the string "5" is coerced to the number 5, so 5 - 2 = 3)
console.log("5" + 2); // Output: "52" (the number 2 is coerced to a string, so "5" + "2" = "52")
console.log(!!"false"); // Output: true (the string "false" is a non-empty string, so it is truthy, and !! converts it to a boolean value)
console.log(Boolean([])); // Output: true (an empty array is a truthy value, so Boolean([]) returns true)
console.log(Boolean({})); // Output: true (an empty object is a truthy value, so Boolean({}) returns true)
console.log(Boolean("")); // Output: false (an empty string is a falsy value, so Boolean("") returns false)

console.log(Boolean(0)); // Output: false (the number 0 is a falsy value, so Boolean(0) returns false)
console.log(Boolean(1)); // Output: true (the number 1 is a truthy value, so Boolean(1) returns true)
console.log(Boolean(-1)); // Output: true (the number -1 is a truthy value, so Boolean(-1) returns true)
console.log(Boolean(NaN)); // Output: false (NaN is a falsy value, so Boolean(NaN) returns false)
console.log(Boolean(undefined)); // Output: false (undefined is a falsy value, so Boolean(undefined) returns false)
console.log(Boolean(null)); // Output: false (null is a falsy value, so Boolean(null) returns false)
console.log(Boolean("0")); // Output: true (the string "0" is a non-empty string, so it is truthy, and Boolean("0") returns true)
