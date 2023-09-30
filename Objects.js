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
// jsUser.emails = "anurag@apple.com"
// console.log(jsUser); //here emaols value are not changed here still value is remains pf freez funtion


// jsUser.greeting = function(){
//     console.log("hello js users");
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello js user,${this.name}`)
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

const regularUser = {
    emails:"some@gmail.com",
    fullName :{
        userFullName:{
            firstName:"anurag ",
            lastName:"singh"
        }
    }
}
//console.log(regularUser.fullName.userFullName.firstName)// accessing value just using dot dot in nested objects
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// const obj5 = {5:"e",5:"t"}
//concatinating obj1 and obj2
// syntax of assign is assign(target , source) here we use { } is empty objects to conform that it comes into the curely barcket
// const obj4= Object.assign({},obj1,obj2,obj5)
// console.log(obj4);
// const obj3={...obj1,...obj2}//this best techinque
// console.log(obj3);

const tinderUser={}
tinderUser.id="122ac"
tinderUser.name="anuragsingh"
tinderUser.isLogin=false


//this is mostly use for database fetching or anything which is related to databse

const users = [
    {
       id: 1,
       email: "h@gamil.com",

    } ,
    {
        id: 1,
        email: "h@gamil.com",
 
     },
     {
        id: 1,
        email: "h@gamil.com",
 
     },
     {
        id: 1,
        email: "h@gamil.com",
 
     },
    ]
  users[1].email ; 
  console.log(tinderUser);
  console.log(Object.keys(tinderUser));
  console.log(Object.values(tinderUser));
  console.log(Object.entries(tinderUser));//har ko ek chhota chhot array bana deta hai 
  console.log(tinderUser.hasOwnProperty('isLogged'));//to check this property exist or not 
  