const user = {
    userName : "nitish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome  to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

console.log(this);

//object inside browser is window object

function coffee(){
    let username = "nitish"
    console.log(this.username);  // undefinded cause it won't work 
}

// coffee()

const coffee = function () {
    let username = "nitish"
    console.log(this.username);  // undefinded cause it won't work 
}


const coffee = () => {
    let username = "nitish"
    console.log(this.username);  // undefinded cause it won't work 
}

// arrow function
//explicit return 
const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo);


//implicit return
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)

const add = (num1, num2) => ({username: "nitish"})
