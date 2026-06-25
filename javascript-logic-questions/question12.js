// find fictorial of a given number in Javascript

// fictorial means the product of all positive integers less than or equal to a given positive integer n. It is denoted by n! and is defined as:
// n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1

// method 1: Using for loop
function factorialUsingForLoop(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

const num = 5;
const factorialForLoop = factorialUsingForLoop(num);
console.log(`Factorial of ${num} (using for loop): ${factorialForLoop}`);

// method 2: Using recursion
function factorialUsingRecursion(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialUsingRecursion(n - 1);
}

const factorialRecursion = factorialUsingRecursion(num);
console.log(`Factorial of ${num} (using recursion): ${factorialRecursion}`);
