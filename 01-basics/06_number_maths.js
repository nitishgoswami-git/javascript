const score = 400
console.log(score)

//explicitly define

const balance = new Number(100)
console.log(balance);


console.log(balance.toString()); // typeof string
console.log(balance.toFixed(1));

const otherNumber = 23.34534

console.log(otherNumber.toPrecision(3))

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));



//+++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.9))
console.log(Math.min(4,3,5,6,7))


console.log(Math.random()); // value lies between 0-1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);