// const clue1 = "hello, this is a clue one."
// console.log(clue1)

// console.log("Clue Found:", clue1)

// const suspectName = "bibek"
// const suspectAge = 25
// console.log("Suspect:", suspectName, "| Age:", suspectAge)
// console.warn("Warning: fingerprint evidence detected")
// console.log("Warning: fingerprint evidence detected")


// const evidenceLog = [
//     {id: 1, item: "Muddy footprint", location: "somewhere"},
//     {id: 2, item: "Tooth Fairy", location: "No where"},
//     {id: 3, item: "Go against things", location: "somewhere in the clouds"}
// ]

// console.table(evidenceLog)

// console.group("Group Start")
// console.log("Heavy driver.")
// console.log("Working driver.")
// console.log("Finding driver")
// console.groupEnd()



// console.time("time starts now")

// let dnaMatches = 0
// for (let i = 0; i < 1_000; i++) {
//     dnaMatches += 1
// }
// console.timeEnd("time ends.")


// const person = {
//     name: "bibek",
//     age: 23,
//     rollno: 12
// }

// console.log(typeof null)
// const uniqueRuneId = Symbol("systemofDown")
// const uniqueRuneId2 = Symbol("rune_of_fire")
// console.log(uniqueRuneId, "Another: ", uniqueRuneId2)

// console.log(typeof 45)
// console.log(typeof "bibek")
// console.log(typeof false)
// console.log(typeof {})
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof [])
// console.log(typeof function() {})
// console.log(typeof 45n)

// Objects are reference types in js

const person = {name: "bibek", age: 234}
const person2 = person
// changes made by person2 will reflect on person
// as well ( reference types) , (both the ref variables are pointing 
// to the same object in the memory)


// what if we need a copy of one object and assign it to another 
// object
// const obj = {name: "something", find: {age: 234}}
// // A shallow copy is created using spread operator
// const shallowCopy = {...obj}
// console.log(shallowCopy)
// // This is called shallow copy because
// // the reference to the nested object is still 
// // preserved
// // change the age property using shallowCopy object
// shallowCopy.find.age = 56
// console.log(obj)

// // Deep copy
// const deepCopy = structuredClone(obj)
// deepCopy.find.age = 67
// console.log(deepCopy)
// console.log(obj)


console.log(null === "object")
console.log(Array.isArray([]))
console.log(Array.isArray({}))