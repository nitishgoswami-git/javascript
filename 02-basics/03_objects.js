// singleton --> when created by constructor
// Object.create()


//objects literals
const mySym = Symbol("key1")

const JsUser = {
    name : "nitish",
    "full name": "Nitish Goswami",
    [mySym]:"mykey1", //if not [] then treat is as string
    age : 23,
    location: "jaipur",
    email: "nitish@gmail.ocm",
    isLoggedIn:false,
    lastLoginDays:['Monday','Saturday']
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"]) // not allowed JsUser.full name
console.log(JsUser.mySym) 

JsUser.email = "nitish12@email.com"
// Object.freeze(JsUser) // change wont be propagated

JsUser.greeting = function(){
    console.log(`Hello Js user,${this["full name"]}`);
}

console.log(JsUser.greeting); // return a function reference
console.log(JsUser.greeting());
