
// string interpolation
const myName = "bibek"
const age = 24

const interpolatedString = ` Name is ${myName} and age is ${age}`


// silent fail
let intercepted = "hello"
intercepted[0] = 's' // unable to change the character
// but will not generate any error
console.log(intercepted)

const something = "hellobibek"
console.log(something.length)
console.log(something.charAt(0)) 
// negative indexing is possible using at
console.log(something.at(-2))

// toUpperCase()
// toLowerCase()
const rawTransmission ="This is soething JLKJLK."
console.log(rawTransmission.toUpperCase())
console.log(rawTransmission.toLowerCase())
console.log(rawTransmission.indexOf('is'))
console.log(rawTransmission.lastIndexOf('soething'))


console.log(rawTransmission.slice(0, 5))
const orders = "move-north|hold-position|extract-zip"
const orderList = orders.split('|')
console.log(orderList)
console.log(orderList.join(">"))

const myString = "SOS".split("")
console.log(myString)

// remove whitespaces : using trim() method 
// padStart, padEnd

const missonNumber = '45'
console.log(missonNumber.padStart(6, "0"))
// padStart() is a string function 


console.log(void "something") // here void always evaluates
// as undefined

const generalStore = {name: "kirana", goods: 2}
console.log(generalStore)
generalStore = undefined
console.log(generalStore)
// 52: assigning undefined will 




