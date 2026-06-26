/*

Equality
== vs ===
Object.is()
null == undefined
NaN == NaN
0 == false
"" == false
[] == false
{} == {} 
 
*/

// question 10: What is the output of the following expressions in JavaScript?
console.log(0 == false); // Output: true (0 is coerced to false, so 0 == false evaluates to true)
console.log("" == false); // Output: true (an empty string is coerced to false, so "" == false evaluates to true)
console.log([] == false); // Output: true (an empty array is coerced to false, so [] == false evaluates to true)
console.log({} == {}); // Output: false (two different object references are not equal, so {} == {} evaluates to false)
console.log(null == undefined); // Output: true (null and undefined are considered equal in non-strict equality, so null == undefined evaluates to true)
console.log(NaN == NaN); // Output: false (NaN is not equal to itself, so NaN == NaN evaluates to false)
console.log(Object.is(NaN, NaN)); // Output: true (Object.is() considers NaN to be equal to itself, so Object.is(NaN, NaN) evaluates to true)
console.log(Object.is(0, -0)); // Output: false (Object.is() considers 0 and -0 to be different values, so Object.is(0, -0) evaluates to false)
console.log(Object.is(0, 0)); // Output: true (Object.is() considers 0 and 0 to be the same value, so Object.is(0, 0) evaluates to true)
console.log(Object.is(-0, -0)); // Output: true (Object.is() considers -0 and -0 to be the same value, so Object.is(-0, -0) evaluates to true)
