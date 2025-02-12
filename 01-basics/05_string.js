const name = "nitish"
const repoCount = 50

// console.log(name +repoCount + " Value"); older version

// string interpolation
console.log(`Hello my nams is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nitish-git')
// type object


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //character at index 2
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // no neg value 
console.log(newString)

const anotherString = gameName.slice(0,4) // gameName.slice(-8,4)

const newStringOne = "  nitish  "
console.log(newStringOne)
console.log(newStringOne.trim()) // whitespaces plus terimator character

const url = "https://nitish.com/page%20git"

console.log(url.replace('%20','-'))

console.log(url.includes('nitish'))

//convert array
console.log(gameName.split('-'))