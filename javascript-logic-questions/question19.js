// create simple calculator using switch case

function calculator(a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = "Invalid operator";
  }
  return result;
}

const a = 10;
const b = 5;
const operator = "+";
const result = calculator(a, b, operator);
console.log(`Result: ${result}`);

// create simple calculator using if else

function calculatorIfElse(a, b, operator) {
  let result;
  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    result = a / b;
  } else {
    result = "Invalid operator";
  }
  return result;
}

const resultIfElse = calculatorIfElse(a, b, operator);
console.log(`Result (using if else): ${resultIfElse}`);

// create simple calculator using ternary operator

function calculatorTernary(a, b, operator) {
  return operator === "+"
    ? a + b
    : operator === "-"
      ? a - b
      : operator === "*"
        ? a * b
        : operator === "/"
          ? a / b
          : "Invalid operator";
}

const resultTernary = calculatorTernary(a, b, operator);
console.log(`Result (using ternary operator): ${resultTernary}`);

// create simple calculator using object

function calculatorObject(a, b, operator) {
  const operations = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
  };
  return operations[operator] !== undefined
    ? operations[operator]
    : "Invalid operator";
}

const resultObject = calculatorObject(a, b, operator);
console.log(`Result (using object): ${resultObject}`);

// create simple calculator using eval function

function calculatorEval(a, b, operator) {
  const expression = `${a} ${operator} ${b}`;
  return eval(expression);
}

const resultEval = calculatorEval(a, b, operator);
console.log(`Result (using eval function): ${resultEval}`);

// create simple calculator using Function constructor

function calculatorFunctionConstructor(a, b, operator) {
  const expression = `return ${a} ${operator} ${b};`;
  const func = new Function(expression);
  return func();
}

const resultFunctionConstructor = calculatorFunctionConstructor(a, b, operator);
console.log(
  `Result (using Function constructor): ${resultFunctionConstructor}`,
);
