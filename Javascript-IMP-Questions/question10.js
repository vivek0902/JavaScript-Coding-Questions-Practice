//Rate Limiter

function rateLimiter(maxCalls, timeWindow) {
  let callCount = 0;
  let queue = [];

  function processQueue() {
    if (queue.length > 0 && callCount < maxCalls) {
      const { func, args } = queue.shift();
      func(...args);
      callCount++;
    }
  }

  setInterval(() => {
    callCount = 0;
    processQueue();
  }, timeWindow);

  return function (func, ...args) {
    if (callCount < maxCalls) {
      func(...args);
      callCount++;
    } else {
      queue.push({ func, args });
    }
  };
}

// Example usage:
const limitedFunction = rateLimiter(2, 1000); // Allow 2 calls per second

limitedFunction((msg) => console.log(msg), "Call 1"); // Executed immediately
limitedFunction((msg) => console.log(msg), "Call 2"); // Executed immediately
limitedFunction((msg) => console.log(msg), "Call 3"); // Queued and executed after 1 second
limitedFunction((msg) => console.log(msg), "Call 4"); // Queued and executed after 1 second
