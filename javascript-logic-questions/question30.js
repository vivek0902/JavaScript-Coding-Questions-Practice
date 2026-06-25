// Find GCD and LCM of two numbers

const num1 = 12;
const num2 = 18;

// Method 1: GCD using Euclidean Algorithm (for loop)
function findGCDUsingLoop(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const gcdUsingLoop = findGCDUsingLoop(num1, num2);
console.log(`GCD of ${num1} and ${num2} (Using Loop): ${gcdUsingLoop}`);

// Method 2: GCD using Recursion
function findGCDUsingRecursion(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b === 0) return a;
  return findGCDUsingRecursion(b, a % b);
}

const gcdUsingRecursion = findGCDUsingRecursion(num1, num2);
console.log(`GCD of ${num1} and ${num2} (Using Recursion): ${gcdUsingRecursion}`);

// Method 3: LCM using formula: LCM(a, b) = (a * b) / GCD(a, b)
function findLCM(a, b) {
  return Math.abs((a * b) / findGCDUsingRecursion(a, b));
}

const lcm = findLCM(num1, num2);
console.log(`LCM of ${num1} and ${num2}: ${lcm}`);

// Method 4: LCM using loop (least common multiple approach)
function findLCMUsingLoop(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  let max = Math.max(a, b);
  for (let i = max; ; i += max) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}

const lcmUsingLoop = findLCMUsingLoop(num1, num2);
console.log(`LCM of ${num1} and ${num2} (Using Loop): ${lcmUsingLoop}`);
