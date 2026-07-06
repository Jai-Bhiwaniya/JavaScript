// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jai",
            lastName: "Bhiwaniya"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const o1 = {1: "a", 2: "b"}
const o2 = {3: "c", 4: "d"}
const o4 = {}

// const o3 = Object.assign({},o1, o2); // first element is target if {} empty is assigned else o1 is altered

const o3 = {...o1,...o2}
// console.log(o3)

const users = [
    {
        id: 1,
        email: "@gmail.com"
    },
    {
        id: 1,
        email: "@gmail.com"
    },
    {
        id1: 1,
        email: "@gmail.com"
    }
]

// user[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(Object.hasOwnProperty('name'))

const course = {
    coursename: "Js",
    price: 299,
    courseInstructor: "Hitesh",
}

course.courseInstructor = "Jai"

const {courseInstructor: Instructor} = course
// console.log(courseInstructor)

console.log(Instructor)

// {
//     "name": "Jai",
//     "coursename": "JB",
//     "price": 299
// }

[
    {},
    {},
    {}
]
