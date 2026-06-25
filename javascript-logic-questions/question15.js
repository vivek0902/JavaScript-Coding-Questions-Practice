//find palindrome in javascript

const str = "racecar";
// method 1: Using for loop

function isPalindromeUsingForLoop(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const isPalindrome = isPalindromeUsingForLoop(str);
console.log(`Is Palindrome (For Loop): ${isPalindrome}`);

// method 2: Using built-in methods
function isPalindromeUsingBuiltInMethods(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

const isPalindromeBuiltIn = isPalindromeUsingBuiltInMethods(str);
console.log(`Is Palindrome (Built-in Methods): ${isPalindromeBuiltIn}`);

// method 3: Using recursion
function isPalindromeUsingRecursion(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindromeUsingRecursion(str.slice(1, -1));
}

const isPalindromeRecursion = isPalindromeUsingRecursion(str);
console.log(`Is Palindrome (Recursion): ${isPalindromeRecursion}`);
