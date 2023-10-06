// IIfe(immeditae invoked functions expression)
// ()()    yaha 1st () denote function details and second () is used for execution
// global scope se bahut pollution haota tha usse bachne ke liye IIFE use krte hai jisse koee function bahut jaldi call bhi hota hai jaise ki database ko connect ke liye bhi use kar skte hai
// for example

// name iife normal function jaise hota h jaise ki

// (function chai(){
//     console.log("hello it is running ");
// })();

// normal iife
// ((name)=>{
//     console.log(`hey ${name},how are you ??`)
// })("Anurag")// by passing parameter 

// we can write two iife by sepearting ;