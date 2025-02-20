// let myName = "Hitesh"
// console.log(myName.truelength)



let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.nitish = function(){
    console.log(`nitish is present is all obj`)
}

Array.prototype.heyNitish = function(){
    console.log(`hey nitish`)
}

// heroPower.nitish()
heroPower.heyNitish()
myHeros.heyNitish()
myHeros.nitish()


// prototyple Inheritence

const User = {
    name : "coffee",
    email: "email@email.com"

}

const Teacher = {
    makeVideo : true
}

const TeacherSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime: false,
    __proto__: TeacherSupport
}

Teacher.__proto__= User

//modern Syntax

Object.setPrototypeOf(TeacherSupport,Teacher)






let anotherUsername = "Coffee     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.truelength

"nitish".truelength()
"iceteaa".truelength()