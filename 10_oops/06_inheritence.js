class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teach = new Teacher("tea","email.com","123")
teach.addCourse()
teach.logMe()

const cappachino = new User("coffee")
cappachino.logMe()

console.log(coffee == teach);
console.log(cappachino instanceof User);
console.log(cappachino instanceof Teacher);