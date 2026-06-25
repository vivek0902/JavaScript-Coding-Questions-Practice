// Check if two strings are anagrams

const str1 = "listen";
const str2 = "silent";

// Method 1: Using sorted characters comparison
function areAnagramsUsingSorting(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

console.log(`Are "${str1}" and "${str2}" anagrams (using sorting)?`, areAnagramsUsingSorting(str1, str2));

// Method 2: Using character frequency count with object
function areAnagramsUsingFrequencyCount(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};
  for (let char of str1.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2.toLowerCase()) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

console.log(`Are "${str1}" and "${str2}" anagrams (using frequency count)?`, areAnagramsUsingFrequencyCount(str1, str2));

// Method 3: Using Map for character frequency
function areAnagramsUsingMap(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charMap = new Map();
  for (let char of str1.toLowerCase()) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (let char of str2.toLowerCase()) {
    if (!charMap.has(char)) return false;
    charMap.set(char, charMap.get(char) - 1);
    if (charMap.get(char) < 0) return false;
  }

  return true;
}

console.log(`Are "${str1}" and "${str2}" anagrams (using Map)?`, areAnagramsUsingMap(str1, str2));
