//diffrence between forEach and map is that forEach does not return anything, it just executes the callback function on each element of the array, while map returns a new array with the results of calling the callback function on each element of the original array.

//Example Map() method
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((x) => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

//Example forEach() method
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((x) => console.log(x * 2)); // 2, 4, 6, 8, 10
