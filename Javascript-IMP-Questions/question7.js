//Memoization

//Using a closure to create a memoized function
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args); // Use JSON.stringify to create a unique key based on the function arguments
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example usage:
function add(a, b) {
  console.log("Calculating...");
  return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3)); // Output: Calculating... 5
console.log(memoizedAdd(2, 3)); // Output: 5 (cached)

// Explanation: Memoization is an optimization technique that involves caching the results of expensive function calls and returning the cached result when the same inputs occur again. In this example, the `memoize` function takes a function `fn` as an argument and returns a new function that caches the results of `fn` based on its arguments. When the memoized function is called with the same arguments, it retrieves the result from the cache instead of recalculating it, improving performance for repeated calls with the same inputs.
