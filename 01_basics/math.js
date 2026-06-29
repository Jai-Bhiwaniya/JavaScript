// const score = 400
// console.log(score) // 400
// const balance = new Number(100)
// console.log(balance) // [Number: 100]

// console.log(balance.toString().length) // 3
// console.log(balance.toFixed(2)) // 100.00

// const other = 128.2938

// console.log(other.toPrecision(3)); // 128

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')) // 10,00,000

// +++++++++++++++ Math ++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-1)) // 1
// console.log(Math.round(4.6)) // 5
// console.log(Math.floor(4.6)) // 4
// console.log(Math.ceil(4.6)) // 5

// console.log(Math.min(1,2,3,4,5)) // 1
// console.log(Math.max(1,2,3,4,5)) // 5

console.log(Math.random()) // prints value between 0 and 1

console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log((Math.random () * (max-min+1))+min) // prints value between 10 and 20