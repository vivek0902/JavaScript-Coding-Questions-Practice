//find vowels from string in javascript

// method 1: Using for loop
function findVowelsUsingForLoop(str) {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
