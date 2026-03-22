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

const numbers = [1, 2, 3, 4, 5]
const mutipliedByTwo = numbers.map((number) => number * 2)

numbers.forEach((number) => {})

function myForEach(fn, arr) {
    for (const number of arr) {
        fn(number)
    }
}

myForEach((number) => console.log(number), numbers)

function myMap(fn, arr) {
    const result = [];
    for (const num of arr){
        result.push(fn(num))
    }
    return result
}

const ans = myMap((number) => number * 2, numbers)
console.log(ans)



const evenNumbers = numbers.filter((number) => number % 2 == 0)
console.log(evenNumbers)

function myFilterMethod(fn, arr) {
    const result = []
    for (const num of arr) {
        const toBeAdded = fn(num)
        if (toBeAdded) { result.push(num)}
    }

    return result
}

const myAnswor = myFilterMethod((number) => number > 2, numbers)
console.log(myAnswor)