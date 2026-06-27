// Deboncing is a programming practice used to ensure that time-consuming tasks do not fire so often, which can cause performance issues. It is commonly used in scenarios like handling user input events (e.g., keypresses, window resizing) where you want to limit the rate at which a function is executed.

// Debouncing function on message input
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args); // Execute the function after the specified delay
    }, delay);
  };
}

// Example usage:
const handleInput = (query) => {
  console.log("Input value:", query);
};
const debouncedHandleInput = debounce(handleInput, 300);

debouncedHandleInput("Hello"); // This will be ignored if called again within 300ms
debouncedHandleInput("Hello, World!"); // This will be executed after 300ms if no further calls are made
debouncedHandleInput("Hello, World! How are you?"); // This will be executed after 300ms if no further calls are made
debouncedHandleInput("Hello, World! How are you doing today?"); // This will be executed after 300ms if no further calls are made
