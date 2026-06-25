//question3 : Find largest prime number in an array
let arr = [10, 15, 3, 7, 11, 20, 17];

// Function to check if a number is prime
function isPrime(num) {
  if (num % 2 === 0 || num < 2) return false;
  for (let fact = 3; fact <= Math.sqrt(num); fact += 2) {
    if (num % fact === 0) return false;
  }
  return true;
}

// Function to find the largest prime number in an array
function findLargestPrime(array) {
  let largestPrime = null;
  for (let num of array) {
    if (isPrime(num)) {
      if (largestPrime === null || num > largestPrime) {
        largestPrime = num;
      }
    }
  }
  return largestPrime;
}

console.log("Largest prime number:", findLargestPrime(arr));
