// Reverse words in a sentence

const sentence = "Hello World JavaScript Programming";

// Method 1: Using split(), reverse(), and join()
function reverseWordsUsingSplitAndReverse(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(
  `Reversed Words (Using split and reverse): "${reverseWordsUsingSplitAndReverse(sentence)}"`,
);

// Method 2: Using a for loop (manual reversal)
function reverseWordsUsingForLoop(sentence) {
  const words = sentence.split(" ");
  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + " ";
  }
  return reversed.trim();
}

console.log(
  `Reversed Words (Using for loop): "${reverseWordsUsingForLoop(sentence)}"`,
);

// Method 3: Using reduce()
function reverseWordsUsingReduce(sentence) {
  return sentence
    .split(" ")
    .reduce((reversed, word) => {
      return word + " " + reversed;
    }, "")
    .trim();
}

console.log(
  `Reversed Words (Using reduce): "${reverseWordsUsingReduce(sentence)}"`,
);

// Method 4: Reverse entire string character by character
function reverseEntireString(sentence) {
  return sentence.split("").reverse().join("");
}

console.log(`Entire String Reversed: "${reverseEntireString(sentence)}"`);
