//throttle function on message input
//Explanation: Throttling is a programming practice used to limit the number of times a function can be executed over time. It ensures that a function is called at most once in a specified time interval, regardless of how many times it is triggered. This is useful for scenarios like handling user input events (e.g., scrolling, mouse movements) where you want to control the rate of function execution to improve performance and prevent excessive calls.
function throttle(func, limit) {
  let lastRan = null;
  return function (...args) {
    const now = Date.now();
    if (!lastRan || now - lastRan >= limit) {
      func(...args);
      lastRan = now;
    }
  };
}

// Example usage:
const handleInputThrottle = (query) => {
  console.log("Input value:", query);
};

const throttledHandleInput = throttle(handleInputThrottle, 1000);
throttledHandleInput("Hello");
throttledHandleInput("Hello, World!");
throttledHandleInput("Hello, World! How are you?");
throttledHandleInput("Hello, World! How are you doing today?");
