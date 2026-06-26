// question 3: Why 9999999999999999

console.log(9999999999999999); // Output: 10000000000000000
// Explanation:
// In JavaScript, numbers are represented using the IEEE 754 double-precision floating-point format.
// This format has a limited precision of about 15-17 decimal digits.
// When you try to represent the number 9999999999999999, it exceeds the precision limit, and JavaScript rounds it to the nearest representable value, which is 10000000000000000.
