let firstName = "bibek" // mutable type ( can be reassigned)
firstName = "someone"
console.log(firstName)

const PI = 3.1415
console.log(PI)


const age = 45
console.log(isAllowedToVote)
console.log(isAllowedToVote(45)) // we can call the function because 
// the function body is hoisted during memory phase.


function isAllowedToVote(age) {
    return age >= 18
}