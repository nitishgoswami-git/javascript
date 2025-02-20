class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }
    static createId(){  //prevents access to instances
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(this,username)
        this.email = email
    }

}

const nitish = new User("nitish")
console.log(nitish.createId()); 


const phone = new Teacher("phone", "iphoen@email.com")
phone.logMe();
console.log(iphone.createId());