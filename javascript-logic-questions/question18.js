// find the factor of a number in javascript

// method 1: Using for loop
function findFactorsUsingForLoop(num) {
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

const factorsUsingForLoop = findFactorsUsingForLoop(9);
console.log(`Factors (Using for loop): ${factorsUsingForLoop}`);
