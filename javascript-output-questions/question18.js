//question 18:
const code = {
  type: "javascript",
  question: 16,
  questionText:
    "What will be the output of the following code snippet and explain why var behaves differently than let in the above code snippet?",
};

const answer = {
  16: `for (var i = 0; i < 5; i++) {
  console.log(i);
}`,
};

//different way to access the answer
console.log(answer[code.question]); // Output: for (var i = 0; i < 5; i++) { console.log(i); }
console.log(answer[code["question"]]); // Output: for (var i = 0; i < 5; i++) { console.log(i); }
