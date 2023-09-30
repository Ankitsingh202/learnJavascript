//singleton are object constructor se banega usko singleton bolte hai 

//Object.create // creating objects using constructor

// adding Symbol as key in object literls
const mysym = Symbol("key1");
// Object literals
const jsUser = {
    name :"Anurag ",//here key like name ,age etc.. is consider as string and value you can put anything 
    "full name":"Anurag Singh",// so here we can not access like that jsUser.full name here we can jsUser["full name"]
    age :"21",
    [mysym]:"mykey1",//puting system variables in square brackets 
    location : "jaipur",
    emails : "anurag@google.com",
    isLogin : false,
    lastlogin:["monday","saturday"]
}
//by dots
// console.log(jsUser.emails);
//by square notions
// console.log(jsUser["emails"]);
//console.log (jsUser.full name )// it show error
//console.log(jsUser["full name"])

// console.log(jsUser[mysym]); // for accessing symbols by using square brackets
// changing values of objects
// jsUser.emails = "anurag@microsoft.com"

// Object.freeze(jsUser) // to make it unchangable or constant after using freez it dosent show any error but still not propgate
jsUser.emails = "anurag@apple.com"
console.log(jsUser); //here emaols value are not changed here still value is remains pf freez funtion


jsUser.greeting = function(){
    console.log("hello js users");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`)
}

