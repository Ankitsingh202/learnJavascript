//primitive data type use stack and from stack we got it copy  while non - primitive datatype use heap and here it 
//give reference location of original value 


// let oldname = "yashwant singh"
// let youtuber = oldname
// youtuber = "anurag singh"
// console.log(youtuber)
// console.log(oldname)
// console.log(youtuber)

let userOne = {
    name : "anuarag singh",
    email : "abcd@gmail.com"
}
let userTwo = userOne
userTwo.name = "ankit singh"
console.log(userOne.name)
console.log(userTwo.name)
// here in both case while printing userOne and userTwo it show ankit singh becouse it is non primitive data typ
// and store Reference  oid userOne name value that way new changes may changes old value in heap
//aur heap me refernce milta hai yaha jo bhi krte hai to original value me hi change krte hai
