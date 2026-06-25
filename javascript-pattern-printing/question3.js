// pattern 3: Inverted right face Right Triangle of Stars
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
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
