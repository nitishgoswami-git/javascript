// Immediately Invoked Function Expression (IIFE)

//named iife
(function coffee () {
    console.log('DB CONNECTED')
}) ();   // must add ; to end in IIFE 

//  to prevent global scope pollution we use IIFE
// () func def 
// () () execution


//unamed iife
( (name) => {
    console.log(`'DB CONNECTED TWO' ${name}`);
})("nitish");