//convert celsius to fahrenheit or vice versa

function convertTemperature(value, unit) {
  if (unit === "C") {
    // Convert Celsius to Fahrenheit
    return (value * 9) / 5 + 32;
  } else if (unit === "F") {
    // Convert Fahrenheit to Celsius
    return ((value - 32) * 5) / 9;
  } else {
    throw new Error("Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.");
  }
}

const celsiusValue = 25;
const fahrenheitValue = convertTemperature(celsiusValue, "C");
console.log(`${celsiusValue}°C is equal to ${fahrenheitValue}°F`);

const fahrenheitValue2 = 77;
const celsiusValue2 = convertTemperature(fahrenheitValue2, "F");
console.log(`${fahrenheitValue2}°F is equal to ${celsiusValue2}°C`);

// Example of invalid unit
try {
  const invalidValue = convertTemperature(100, "K");
  console.log(invalidValue);
} catch (error) {
  console.error(error.message);
}
