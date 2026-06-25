// Check if string has balanced parentheses/brackets

const str1 = "{[()]}";
const str2 = "{[(])}";
const str3 = "([{}])";

// Method 1: Using Stack (array)
function isBalancedUsingStack(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(`Is "${str1}" balanced? ${isBalancedUsingStack(str1)}`);
console.log(`Is "${str2}" balanced? ${isBalancedUsingStack(str2)}`);
console.log(`Is "${str3}" balanced? ${isBalancedUsingStack(str3)}`);

// Method 2: Using character counting (simple parentheses only)
function isBalancedSimple(str) {
  let count = 0;
  for (let char of str) {
    if (char === "(") count++;
    else if (char === ")") count--;
    if (count < 0) return false; // More closing than opening
  }
  return count === 0;
}

console.log(`Is "((()))" balanced (simple)? ${isBalancedSimple("((()))")}`);
console.log(`Is "((())" balanced (simple)? ${isBalancedSimple("((())")}`);

// Method 3: Using regex to remove matching pairs repeatedly
function isBalancedUsingRegex(str) {
  while (str.includes("()") || str.includes("[]") || str.includes("{}")) {
    str = str.replace(/\(\)|\[\]|\{\}/g, "");
  }
  return str.length === 0;
}

console.log(`Is "${str1}" balanced (regex)? ${isBalancedUsingRegex(str1)}`);
console.log(`Is "${str2}" balanced (regex)? ${isBalancedUsingRegex(str2)}`);
