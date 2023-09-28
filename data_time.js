let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // mydate is object 

let myCreatedDate = new Date(2023, 9,28)
console.log(myCreatedDate.toDateString())
let mytimestamp = Date.now()
console.log(mytimestamp);
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long",
})