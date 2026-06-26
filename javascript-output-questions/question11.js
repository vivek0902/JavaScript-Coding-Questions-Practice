const data = 100;
console.log(data);
console.log(data.toString()); // output: "100" // Converts the number to a string representation
console.log(data.toString(2)); // output: "1100100" // Converts the number to a binary string representation

//console.log(100.toString());// output: error: Invalid or unexpected token // This line will throw an error because the number literal is not valid syntax for calling a method directly. To fix this, you can wrap the number in parentheses like (100).toString() or use a variable as shown above.
console.log((100).toString()); // output: "100" // This is a valid way to call the toString() method on a number literal.
console.log((100).toString()); // output: "100" // This is another valid way to call the toString() method on a number literal. The double dot is used to access the method after the number.
