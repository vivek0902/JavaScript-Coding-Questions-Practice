//question6: Find last element of the array

//Method 1: Using array length property
let arr = [1, 2, 3, 4, 5];
let lastElement = arr[arr.length - 1];
console.log("Last element (using length property):", lastElement);

//Method 2: Using slice method
let lastElementSlice = arr.slice(-1)[0]; // The slice method returns a new array containing the last element, and we access it using [0] to get the value.
console.log("Last element (using slice method):", lastElementSlice);

//Method 3: Using pop method
let arrCopy = [...arr]; // Create a copy of the original array to avoid modifying it
let lastElementPop = arrCopy.pop(); //
console.log("Last element (using pop method):", lastElementPop);

//Method 4: Using at method (ES2022)
let lastElementAt = arr.at(-1);
console.log("Last element (using at method):", lastElementAt);

//Method 5: Using reduce method
let lastElementReduce = arr.reduce((_, current) => current);
console.log("Last element (using reduce method):", lastElementReduce);

//Method 6: Using for loop
let lastElementLoop;
for (let i = 0; i < arr.length; i++) {
  lastElementLoop = arr[i];
}
console.log("Last element (using for loop):", lastElementLoop);
