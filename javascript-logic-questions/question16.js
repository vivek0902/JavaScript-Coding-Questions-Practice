//swap two numbers

//using third variable

function swapUsingThirdVariable(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

[a, b] = swapUsingThirdVariable(5, 10);
console.log(`After swapping (using third variable): a = ${a}, b = ${b}`);

//method 2: Using arithmetic operations
function swapUsingArithmeticOperations(a, b) {
  if (a > b) {
    a = a - b;
    b = a + b;
    a = b - a;
  } else {
    b = b - a;
    a = a + b;
    b = a - b;
  }

  return [a, b];
}

[a, b] = swapUsingArithmeticOperations(5, 10);
console.log(`After swapping (using arithmetic operations): a = ${a}, b = ${b}`);

//method 3: Using destructuring assignment
function swapUsingDestructuringAssignment(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

[a, b] = swapUsingDestructuringAssignment(5, 10);
console.log(
  `After swapping (using destructuring assignment): a = ${a}, b = ${b}`,
);
