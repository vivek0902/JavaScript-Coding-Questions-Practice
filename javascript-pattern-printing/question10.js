// pattern 10: Hollow Square of Stars

/*

    * * * * * * * * *
    * * * *   * * * *
    * * *       * * *
    * *           * *
    *               *
    * *           * *
    * * *       * * *
    * * * *   * * * *
    * * * * * * * * * 

*/
console.log("\n"); // Add a new line for separation
for (let i = 1; i <= 9; i++) {
  let row = "";
  const level = i <= 5 ? i : 10 - i;
  for (let j = 1; j <= 9; j++) {
    if (level === 1 || j <= 6 - level || j >= 4 + level) {
      row += "* "; // Print star for the border rows and outer edges
    } else {
      row += "  "; // Print spaces for the hollow middle
    }
  }
  console.log(row);
}
