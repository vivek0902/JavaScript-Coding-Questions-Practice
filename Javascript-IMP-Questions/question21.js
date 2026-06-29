// difference between call, bind, apply

// call() method is used to invoke a function with a specific this value and arguments provided individually. It immediately calls the function and returns the result.

// bind() method is used to create a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. It does not immediately call the function, but returns a new function that can be invoked later.

// apply() method is used to invoke a function with a specific this value and arguments provided as an array (or an array-like object). It immediately calls the function and returns the result.

function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

// Example usage of call() method with same function
const person = { name: "Alice" };
console.log(greet.call(person, "Hello", "!")); // "Hello, Alice!"

// Example usage of apply() method with same function
console.log(greet.apply(person, ["Hello", "!"])); // "Hello, Alice!"

// Example usage of bind() method with same function
const boundGreet = greet.bind(person, "Hi");
console.log(boundGreet("?")); // "Hi, Alice?"
//explanation: In the above example, we have a function greet that takes two parameters: greeting and punctuation. We create an object person with a name property. We then use call(), apply(), and bind() methods to invoke the greet function with the person object as the this value. The call() and apply() methods immediately invoke the function, while the bind() method returns a new function that can be invoked later.
