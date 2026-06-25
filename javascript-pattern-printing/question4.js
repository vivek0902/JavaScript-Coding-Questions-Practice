// pattern 4: Inverted Left face Right Triangle of Stars
/*

* * * * * * 
  * * * * * 
    * * * * 
      * * * 
        * * 
          *

*/
for (let i = 6; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= 6 - i; j++) {
    row += "  "; // Add spaces for left alignment
  }
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
