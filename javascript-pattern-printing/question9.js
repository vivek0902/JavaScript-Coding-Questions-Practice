// pattern 9: Hourglass of Stars

/*

* * * * * * * * * 
  * * * * * * *   
    * * * * *     
      * * *       
        *         
      * * *       
    * * * * *     
  * * * * * * *   
* * * * * * * * *

*/

console.log("\n"); // Add a new line for separation

for (let i = 1; i <= 9; i++) {
  let row = "";
  for (let j = 1; j <= 9; j++) {
    if (i <= 5) {
      if (j >= i && j <= 10 - i) {
        row += "* "; // Print star for the upper half
      } else {
        row += "  "; // Print spaces for the upper half
      }
    } else {
      if (j >= 10 - i && j <= i) {
        row += "* "; // Print star for the lower half
      } else {
        row += "  "; // Print spaces for the lower half
      }
    }
  }
  console.log(row);
}
