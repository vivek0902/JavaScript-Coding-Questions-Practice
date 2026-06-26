//NaN;
//Object.is(NaN, NaN);
//NaN === NaN;

console.log(NaN); // Output: NaN
console.log(Object.is(NaN, NaN)); // Output: true //object.is() method determines whether two values are the same value. It returns true if the values are the same, and false otherwise. In this case, it returns true because both values are NaN.
console.log(NaN === NaN); // Output: false

// Explanation:
// NaN (Not-a-Number) is a special value in JavaScript that represents an undefined or unrepresentable value resulting from an invalid mathematical operation.
// Object.is(NaN, NaN) returns true because it checks for strict equality without the special rule that NaN is not equal to itself.
// The expression NaN === NaN returns false because, according to the IEEE 754 standard, NaN is not considered equal to any value, including itself.
