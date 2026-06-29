// Primitive

// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt

// dynamically typed language

const score = 100.2
const isLoggedIn = false
const outsideTemp = null
let userEmail // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  //false

const bigNumber = 3456543576654356754n // automatically treated as BigInt

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "Jai",
    age: 21
}

const func = function(){
    console.log("Hello World")
}

console.log(typeof myobj) // object
console.log(typeof heros)  

// Reference (Non-Primitive)

// Array, Objects, Functions


// stack (Primitive) -> copy, heap (Not Primitive) -> reference
let myNum = 100
let anotherNum = myNum //copy
anotherNum = 200
console.log(myNum) // 100

let userOne = {
    email: "u1",
    upi: "@xnx"
}

let userTwo = userOne // reference
userTwo.email = "u2"
console.log(userOne.email) // u2
