// Dates

// let myDate = new Date()

// console.log(myDate.toString()) // current date and time
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate) // object

// let myDate2 = new Date(2021, 0, 33)
// console.log(myDate2.toLocaleString()) // 2021-02-02T00:00:00.000Z

// let myDate2 = new Date(2021, 0, 23)
// console.log(myDate2.toLocaleString()) 

// let andate = new Date("2021-01-12")
// console.log(andate.toLocaleString()) // 2023-01-14T00:00:00.000Z

// console.log(andate.getTime()) 

// let myTimeStamp = Date.now()

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})