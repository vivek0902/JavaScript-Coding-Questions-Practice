// Question 17: What will be the output of the following code snippet and explain why the arrow function behaves differently than the regular function in the above code snippet?

const income = {
  salary: 500000,
  monthly: function () {
    return this.salary / 12;
  },
  yearly: () => {
    return this.salary;
  },
};

console.log(income.monthly()); // Output: 41666.666666666664
console.log(income.yearly()); // Output: undefined

//Explanation: In this code snippet, we have an object income with a property salary and two methods: monthly and yearly. The monthly method is defined using a regular function, which has its own this context. When we call income.monthly(), the this keyword refers to the income object, allowing us to access the salary property and calculate the monthly income correctly.
//On the other hand, the yearly method is defined using an arrow function. Arrow functions do not have their own this context; instead, they inherit this from the surrounding lexical scope. In this case, the surrounding scope is the global context (or module context in strict mode), where this does not refer to the income object. As a result, when we call income.yearly(), this.salary is undefined, leading to the output of undefined.
