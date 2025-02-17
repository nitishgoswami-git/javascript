const promiseOne = new Promise((resolve,reject)=>{
    // do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise((res,rej)=>{
    setTimeout(function(){
        console.log("Async task 2");
        res()
    },1000)
}).then(function(){
    console.log("Async 2 resolve")
})


const promiseThree = new Promise((res,rej)=>{
    setTimeout(()=>{res({username: "Coffee",email:"email@email.com"})},1000)
})

promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((res,rej)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            res({username:"Nitish", password:"123"})
        }else{
            rej('ERROR: SOMETHING WENT WRONG')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((e)=>{
    console.log(e);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected")
})



const promiseFive = new Promise((res,rej)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            res({username:"javascript", password:"123"})
        }else{
            rej('ERROR: JS WENT WRONG')
        }
    },1000)
})


async function consumePromiseFive() {
    try{
    const res = await promiseFive
    console.log(res);
    }catch(e){
        console.log(e)
    }
}

consumePromiseFive()


async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }
    
getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available