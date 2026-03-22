// age = 34
// console.log("Age is ", age)
// var age = 78
// console.log(age)

// In JavaScript, var has function scope and is hoisted.

// 👉 Hoisting means the declaration is moved to the top of its scope before execution.

// So your code is interpreted like this:

// var age;        // hoisted declaration (initialized as undefined)

// age = 34;
// console.log("Age is ", age);  // prints: Age is 34

// age = 78;
// console.log(age);             // prints: 78



// age = 78 // this line causes the error:ReferenceError: Cannot access 'age' before initialization
// console.log(age)
// let age = 234
// console.log(age)
let value = 24
hello()

function hello() {
    console.log("hello")
}