// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "Full": "Jai",
    [mySym]: "MyKeys",
    age: 18,
    location: "Jaipur",
    email: "Jai201@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.mySym)
// console.log(JsUser["mySym"])

// JsUser.email = "Jaiiitbhu.com"

// console.log(JsUser.email)

// Object.freeze(JsUser)
// JsUser.email = "Hiteshlodu.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());