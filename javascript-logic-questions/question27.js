//Check Armstrong Number in JavaScript
// An Armstrong number (also known as a narcissistic number) is a number that is equal to the sum of its own digits raised to the power of the number of digits.
// For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.
// For example, 9474 is an Armstrong number because 9^4 + 4^4 + 7^4 + 4^4 = 9474

// method 1: Using for loop
function isArmstrongNumber(num) {
  const numStr = num.toString(); // Convert the number to a string to easily access its digits | other way to convert number to string is using String(num) or num + ''
  const numDigits = numStr.length;
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }
  return sum === num;
}

const number = 153;
if (isArmstrongNumber(number)) {
  console.log(`${number} is an Armstrong number. by for loop method`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}

// method 2: Using reduce() method
function isArmstrongNumberUsingReduce(num) {
  const numStr = num.toString();
  const numDigits = numStr.length;
  const sum = numStr.split("").reduce((total, digit) => {
    return total + Math.pow(parseInt(digit), numDigits);
  }, 0);
  return sum === num;
}

const number2 = 9474;
if (isArmstrongNumberUsingReduce(number2)) {
  console.log(`${number2} is an Armstrong number. by reduce method.`);
} else {
  console.log(`${number2} is not an Armstrong number.`);
}

// method 3: Using % to split the number into digits
function isArmstrongNumberUsingModulus(num) {
  const numDigits = num.toString().length; // other way to get the number of digits is using Math.floor(Math.log10(num)) + 1
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

const number3 = 1634;
const number4 = 123;
if (isArmstrongNumberUsingModulus(number3)) {
  console.log(`${number3} is an Armstrong number. by modulus method.`);
} else {
  console.log(`${number3} is not an Armstrong number.`);
}

if (isArmstrongNumberUsingModulus(number4)) {
  console.log(`${number4} is an Armstrong number. by modulus method.`);
} else {
  console.log(`${number4} is not an Armstrong number.`);
}
