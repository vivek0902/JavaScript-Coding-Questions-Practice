//Number.EPSILON;

console.log(Number.EPSILON); // Output: 2.220446049250313e-16
// Explanation:
// Number.EPSILON is a constant in JavaScript that represents the smallest difference between two representable numbers.
// It is approximately equal to 2.220446049250313e-16, which is the smallest value that can be added to 1 to produce a distinct number greater than 1.
// This value is useful for comparing floating-point numbers and determining if they are "close enough" to be considered equal.

// Example:
console.log(1.0 === 1.0); // Output: true
console.log(1.0 === 1.0 + Number.EPSILON); // Output: false
console.log(1.0 === 1.0 + Number.EPSILON / 2); // Output: true
//explanation:
// In the first example, 1.0 is not equal to 1.0 + Number.EPSILON because the difference is greater than the smallest representable difference.
// In the second example, 1.0 is equal to 1.0 + Number.EPSILON / 2 because the difference is smaller than the smallest representable difference, and they are considered equal.

//parseInt("08");
console.log(parseInt("08")); // Output: 8
// The parseInt() function in JavaScript is used to convert a string into an integer.
// In this case, the string "08" is passed to parseInt(), and it successfully converts it to the integer 8.
// The leading zero in the string does not affect the conversion, and parseInt() correctly interprets it as a decimal number.

explanation: console.log(parseInt("08", 10)); // Output: 8
// explanation:
// The parseInt() function in JavaScript is used to convert a string into an integer.
// In this case, the string "08" is passed to parseInt() with a radix of 10, indicating that the number should be interpreted as a decimal (base 10) number.
// It successfully converts the string to the integer 8, and the leading zero does not affect the conversion.

console.log(parseInt("08", 8)); // Output: 0
// explanation:
// The parseInt() function in JavaScript is used to convert a string into an integer.
// In this case, the string "08" is passed to parseInt() with a radix of 8, indicating that the number should be interpreted as an octal (base 8) number.
// However, "08" is not a valid octal number because the digit '8' is not allowed in base 8. As a result, parseInt() stops parsing at the invalid character and returns 0, which is the integer value of the valid part of the string before the invalid character.

//parseFloat();
console.log(parseFloat("3.14")); // Output: 3.14
// explanation:
// The parseFloat() function in JavaScript is used to convert a string into a floating-point number.
// In this case, the string "3.14" is passed to parseFloat(), and it successfully converts it to the floating-point number 3.14.

console.log(parseFloat("3.14abc")); // Output: 3.14
// explanation:
// The parseFloat() function in JavaScript is used to convert a string into a floating-point number.
// In this case, the string "3.14abc" is passed to parseFloat(), and it successfully converts it to the floating-point number 3.14.
// The function stops parsing when it encounters a character that is not part of a valid floating-point number, so the "abc" part is ignored.

console.log(parseFloat("abc3.14")); // Output: NaN
// explanation:
// The parseFloat() function in JavaScript is used to convert a string into a floating-point number.
// In this case, the string "abc3.14" is passed to parseFloat(), but it does not start with a valid numeric representation.
// As a result, parseFloat() returns NaN (Not-a-Number) to indicate that the conversion was unsuccessful.

console.log(parseFloat("3.14e2")); // Output: 314
// explanation:
// The parseFloat() function in JavaScript is used to convert a string into a floating-point number.
// In this case, the string "3.14e2" is passed to parseFloat(), and it successfully converts it to the floating-point number 314.
// The "e2" part indicates scientific notation, where "e" represents "times ten raised to the power of," so 3.14e2 is equivalent to 3.14 * 10^2, which equals 314.
