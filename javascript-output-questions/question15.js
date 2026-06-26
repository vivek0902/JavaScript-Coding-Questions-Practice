var a = {};
var b = { key: "b" };
var c = { key: "c" };
a[b] = 123;
a[c] = 456;

console.log(a[b]); // Output: 456
// Explanation:
// In this code snippet, we create three objects: a, b, and c. We then use the objects b and c as keys to set values in the object a. However, when we use an object as a key in another object, JavaScript converts the object to a string representation. In this case, both b and c are converted to the same string "[object Object]". Therefore, when we set a[b] = 123 and then a[c] = 456, the second assignment overwrites the first one because both keys are treated as the same string. As a result, when we log a[b], it returns 456, which is the value associated with the key "[object Object]".

console.log(a[c]); // Output: 456

console.log(a); // Output: { '[object Object]': 456 }
