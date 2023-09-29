const myArray = [1,23,43,556,656]
console.log(myArray[1]);

// in javaScripts array copy -operations created 
// SHALLOW COPIES 
// shallow copy:- a shallow copy of any object whose properties share 
// the same Reference(point to the same underlyong values )

// DEEP copies :- a deep copy of an objects is a copy ehose properties
// do not share the same Reference
//myArray.push(19)
//console.log(myArray);
// myArray.unshift(1000);//unshift is used to add value in beggining og the array
// console.log(myArray);
// myArray.shift();//shift use karne se jo value unshit se add kiye ahi usko remove kar daga ye aur isme koee argumenent dena ka jarurat nhi hai
// console.log(myArray);
// console.log(myArray.includes(23));
// console.log(myArray.indexOf(3));

// join
// const newArry = myArray.join()
// console.log(myArray);
// console.log(newArry);

// SLICE ,SPLICE
console.log("A  ",myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1)
console.log("B ",myArray)


const myn2 = myArray.splice(1,3);
console.log("C",myArray);
console.log(myn2);

// the main differnce between slice and splice is 
// slice just reture value exclude its last value and 
// with no affexts on original array while using splice 
// it return or show all value of range including the last value and it affects the
// the orignal value of array by removing its splice part in the original array 
const marvel_heros =["thor ","ironman","spiderman"]
const dc =["superman","flash","batman"]
// marvel_heros.push(dc)
// console.log(marvel_heros);

// marvel_heros.concat(dc)
// console.log(marvel_heros);
// by using concat and push after  the opertaion it show the new add value as next index but it carry amn value
const allheros = marvel_heros.concat(dc)
console.log(allheros)
// here after using allheros variable then concanted arrray is not arrya then ut becomes value

// by using spread operetor
const all_new_heroes = [...marvel_heros,...dc]
console.log(all_new_heroes);

// flat : use flat when there are array in array and no any sequence wise arrangement of arrya then use flat
// const another_array = [1,23,343,54,[12,3,4],32,[232,3,5,[320,334]]]
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

//IMPORTANT topics

// console.log(Array.isArray("Anurag"))
// console.log(Array.from("Anurag"))
// console.log(Array.from({name : "anuarg singh"}))// here it show empty array becouse it confused to amke array of either of key or value

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));