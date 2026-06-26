/*
Unary +
Bitwise operators converting to 32-bit integers
BigInt limitations
Why 1n + 1 throws error 
*/

// Unary +

console.log(+"5"); // Output: 5
// Explanation:
// The unary plus operator (+) is used to convert a value to a number. In this case, it converts the string "5" to the number 5.
console.log(+"05"); // Output: 5
// Explanation:
// The unary plus operator (+) is used to convert a value to a number. In this case, it converts the string "05" to the number 5.
console.log(+"005"); // Output: 5
// Explanation:
// The unary plus operator (+) is used to convert a value to a number. In this case, it converts the string "005" to the number 5.

// Bitwise operators converting to 32-bit integers
console.log(5 | 0); // Output: 5
// Explanation:
// The bitwise OR operator (|) converts the operands to 32-bit integers before performing the operation. In this case, 5 is already a 32-bit integer, so the result is 5.

// BigInt limitations
console.log(1n + 1); // Output: TypeError: Cannot mix BigInt and other types
// Explanation:
// In JavaScript, BigInt is a special numeric type that can represent integers with arbitrary precision. However, you cannot mix BigInt with regular numbers in arithmetic operations.
// In this case, trying to add a BigInt (1n) and a regular number (1) results in a TypeError.

console.log(1n + 1n); // Output: 2n
// Explanation:
// When both operands are BigInt (1n + 1n), the operation is valid, and the result is also a BigInt (2n).
