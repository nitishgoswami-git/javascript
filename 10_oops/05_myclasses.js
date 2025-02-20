//ES6

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const coffee = new User("coffee","abd@email.com","123")
console.log(coffee.encryptPassword());
console.log(coffee.changeUsername())



//behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername =function(){
    return `${this.username.toUpperCase()}`
}