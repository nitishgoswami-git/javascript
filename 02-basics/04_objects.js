// const tinderUser = new Object() // singleton obj
const tinderUser = {} // not a singleton obj

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "nitish@gmail.ocm",
    fullname: {
        userfullname: {
            firstname : "nitish",
            lastname: "Goswami"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) //{} optional that provides a clarity for source 
const obj3 = {...obj1, ...obj2}

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"x@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // datatype is array also works with values

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true or false


//de structuring
const course ={
    coursename: "Js in Hindi",
    price: "999",
    courseInstructure :"nitish"
}

const {courseInstructure: instructure} = course
console.log(instructure);



// Json object
// {
//     "name": "nitish",
//     "coursename": "js in hindi",
//     "price": free
// }
