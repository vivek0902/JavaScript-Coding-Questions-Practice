// pattern 7: Diamond of Stars
/*
          * 
        * * * 
      * * * * * 
    * * * * * * * 
  * * * * * * * * * 
* * * * * * * * * * * 
  * * * * * * * * * 
    * * * * * * * 
      * * * * * 
        * * * 
          * 
            
*/

console.log("\n"); // Add a new line for separation

for (let i = 1; i <= 6; i++) {
  let row = "";
  for (let j = 1; j <= 6 - i; j++) {
    row += "  "; // Add spaces for left alignment
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "* ";
  }
  console.log(row);
}

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= 6 - i; j++) {
    row += "  "; // Add spaces for left alignment
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "* ";
  }

  console.log(row);
}
