// pattern 6: Inverted Pyramid of Stars
/*

* * * * * * * * * * *    // 2*6-1 = 11 [2*i-1]
  * * * * * * * * *      // 2*5-1 = 9
    * * * * * * *        // 2*4-1 = 7
      * * * * *          // 2*3-1 = 5
        * * *            // 2*2-1 = 3
          *              // 2*1-1 = 1  
         
*/

for (let i = 6; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= 6 - i; j++) {
    row += "  "; // Add spaces for left alignment
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "* ";
  }
  console.log(row);
}
