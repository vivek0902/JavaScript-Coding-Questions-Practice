const name = "John Doe";
age = 30;

console.log(delete name); // Output: false
console.log(delete age); // Output: true

//explaination: In JavaScript, the delete operator is used to remove a property from an object. However, it cannot delete variables declared with var, let, or const. In this case, 'name' is declared with const, so delete name returns false. On the other hand, 'age' is not declared with var, let, or const (it is implicitly created as a global variable), so delete age returns true.
