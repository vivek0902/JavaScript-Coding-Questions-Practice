// question 11: print piramind with numerical number
let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  // Print leading spaces
  for (let j = 1; j <= n - i; j++) {
    str += " ";
  }
  // Print numbers
  for (let k = 1; k <= i; k++) {
    str += k + " ";
  }
  str += "\n";
}
console.log(str);

// question 12: print piramind with numerical 1 to n

/*
      1 
     3 2 
    6 5 4 
   10 9 8 7 
15 14 13 12 11 

*/

let n2 = 5;
let str2 = "";
let num = 1;
for (let i = 1; i <= n2; i++) {
  // Print leading spaces
  for (let j = 1; j <= n2 - i; j++) {
    str2 += " ";
  }
  // Print numbers
  for (let k = 1; k <= i; k++) {
    str2 += num + " ";
    num++;
  }
  str2 += "\n";
}
console.log(str2);
