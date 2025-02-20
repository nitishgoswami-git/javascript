function SetUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username,email,password){
    SetUsername.call(this,username) //.call holds reference
    this.email = email
    this.password = password

}

const coffee = new createUser("coffee", "coffee@email.com","123")
console.log(coffee);