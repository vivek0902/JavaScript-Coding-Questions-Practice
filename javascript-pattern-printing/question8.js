// pattern 8: Hollow Diamond of Stars
/*

          * 
        *   * 
      *       * 
    *           * 
  *               * 
*                   * 
  *               * 
    *           * 
      *       * 
        *   * 
          * 
            
*/

console.log("\n"); // Add a new line for separation

for (let i = 1; i <= 6; i++) {
  let row = "";
  for (let j = 1; j <= 6 - i; j++) {
    row += "  "; // Add spaces for left alignment
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      row += "* "; // Print star at the beginning and end of the row
    } else {
      row += "  "; // Print spaces in between
    }
  }
  console.log(row);
}

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= 6 - i; j++) {
    row += "  "; // Add spaces for left alignment
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      // Print star at the beginning and end of the row
      row += "* "; // Print star at the beginning and end of the row
    } else {
      row += "  "; // Print spaces in between
    }
  }
  console.log(row);
}
