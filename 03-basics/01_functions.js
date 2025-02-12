function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName   // reference
// sayMyName() //execute

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1,num2){
    let res = num1 + num2
    return res
}


const res = addTwoNumbers(3,3) 


function loginUserMessage(username = "nitish"){
    return `${username} just logged in`
}

// console.log(loginUserMessage("nitish")); // if value is not pass then undefined is passed 


function calculateCartPrice(...num){ //rest operator
    return num 
}


const user ={
    username:"nitish",
    price : 100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username: "nitish",
    price: 400
})

const myNewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500]));