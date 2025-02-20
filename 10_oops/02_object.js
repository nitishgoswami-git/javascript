function mulby5(num){
    // this.num = num
    return num * 5
}

// function can behave as objects 
// javascript follows a prototyple behaviour

mulby5.power = 2

console.log(mulby5(5));
console.log(mulby5.power);
console.log(mulby5.prototype);


function createUser(username,price){
    this.username = username
    this.price = price
}


createUser.prototype.increment = function(){
    this.price ++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`)
}

// new keyword will the tell coffee existence of the prototypes
// new calls the constructor

const coffee = new createUser("coffee",50)
const tea = new createUser("cappachino",100)

coffee.printMe()
