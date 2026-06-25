//find fibonacci sequence

// method 1: Using for loop
function fibonacciUsingForLoop(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // Calculate the next Fibonacci number example for n=10: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    //it goes like fib[2] = fib[1] + fib[0] = 1 + 0 = 1 => fib[3] = fib[2] + fib[1] = 1 + 1 = 2 => fib[4] = fib[3] + fib[2] = 2 + 1 = 3 => fib[5] = fib[4] + fib[3] = 3 + 2 = 5 => fib[6] = fib[5] + fib[4] = 5 + 3 = 8 => fib[7] = fib[6] + fib[5] = 8 + 5 = 13 => fib[8] = fib[7] + fib[6] = 13 + 8 = 21 => fib[9] = fib[8] + fib[7] = 21 + 13 = 34
  }
  return fib;
}

const fibonacciSequenceUsingForLoop = fibonacciUsingForLoop(1);
console.log(
  `Fibonacci Sequence (Using for loop): ${fibonacciSequenceUsingForLoop}`,
);
