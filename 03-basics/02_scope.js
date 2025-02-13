var c  = 300
let a = 200

if (true){
    let a = 10
    const b = 20
    var c = 30  // var is more like global scope so avoid 
    // console.log("inner: ",a);
}

// when run through node global scope is different compared to browser console

// console.log(a);
// // console.log(b);
// console.log(c);

//nested scope
function one(){
    const userName = "nitish"
    function two(){
        const webSite = "github"
        console.log(userName)
    }
    // console.log(webSite)
    two()
}
// one()


if(true){
    const userName= "nitish"
    if(userName === "nitish"){
        const webSite = " github"
        // console.log(userName + webSite);
    }
    // console.log(webSite);
}

// console.log(userName)

// ++++++++++++++++++++ Interesting ++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1

}
// addOne(5)


console.log(addTwo(5));   // error if delclaration also called hoisting
const addTwo = function(num){
    return num + 2
}

// addTwo(5)
