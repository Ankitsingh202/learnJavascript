const coding = ["js","ruby","java","Python"]

// by normal function
coding.forEach( function (item){
  console.log(item);
})

// by arrow function
coding.forEach((item)=>{
    console.log(item)
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// printme ek item leta hai jo bhi do wo print kar ke de deta hai
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)



//using by in array we puts many objects
 const myCoding = [
    { 
       lanName : " java",
       langFileName:"java",

    },
    { 
        lanName : " python",
        langFileName:"py",
 
     },
     { 
        lanName : "javascripts",
        langFileName:"js",
 
     },
 ]
 myCoding.forEach((item)=>{
    console.log(item.langFileName)
 })

 //checking for loop returning anything or not
 const fruits1 = ["apple","mango","banana","lichi"]
 const values = coding.forEach((item) =>{
   // console.log(item)
    return item;
 })
 console.log(fruits1)
//so here output comes undefined it means for loop didn't return any value

//by using filter and it also return value 
const myNums = [1,2,3,4,5,6,7,8,9]
const newNUms = myNums.filter((num)=>num>4)
console.log(newNUms);

//increment all value by 10 
const myNumber =[1,2,3,4,5,6,7,8,9,10]

const newNum = myNumber.map((num)=>num+10)
console.log(newNum);

// chainning means here we putting one value to another value here you
//can see first map value pass to second map value then opertaion become successful
// seconds value goes in 3rd method here like filter
const numbers =[12,3,4,56,5776,8,87]
const newNumb1 = numbers
                     .map((num)=>num*10)
                     .map((num)=>num+1)
                     .filter((num)=>num>=40)

console.log(newNumb1);