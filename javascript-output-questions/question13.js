let user = { name: "virat", age: 30, city: "delhi" };
const userList = [user];
user = null;
console.log(userList[0].name); // Output: virat
// Explanation:
// In this code snippet, we create an object user with properties name, age, and city. We then create an array userList and add the user object to it. After that, we set the user variable to null. However, the reference to the original user object is still maintained in the userList array. Therefore, when we access userList[0].name, it still returns "virat" because the object itself has not been deleted or modified; only the reference in the user variable has been changed to null.
