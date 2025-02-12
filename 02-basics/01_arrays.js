//array

const myArr = [0,1,2,3,4,true,"nitish"]
const myHeros = ['ironman','capt.America']

const myArr2 =  new Array(1,2,3,4)


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(0)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join() //binds and convert to strings

console.log(myArr);
console.log(newArr);

// slice , splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3) //
const myn2 = myArr.splice(1,3) // manipulates og array


