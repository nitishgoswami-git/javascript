const marvel_heros = ['thor','Ironman','spiderman']
const dc_heros = ['superman','flash','batman']

marvel_heros.push(dc_heros) // not works const newArr = marvel_her0 ....
console.log(marvel_heros[3][0]);

const newArr2 = marvel_heros.concat(dc_heros)
console.log(newArr2[4])

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)


//

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const an_arr = another_array.flat(Infinity) // flat(depth value)


console.log(Array.isArray("Nitish"))
console.log(Array.from("Nitish"))
console.log(Array.from({name:"Nitish"})) // important 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

