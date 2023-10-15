// isme accumulator hota hai jo extra value space hota hai aur isko
// intial value se assign kar dete hai aur currentvalue me current value rhta hai 

// REDUCE with normal Function
const number =[1,3,5]
const myTotal = number.reduce(function (acc,currval){
    console.log(`acc :${acc} and currval : ${currval}`);
    return acc + currval;
},0)// yaha pe 0 assign kr rahe hai acc me
console.log(myTotal)

// REDUCE with ARROW functions
 const number1 =[1,2,3,4]
 const totalsum = number1.reduce((accu,currValue)=>{
    return accu+currValue;
 },0)
 console.log(totalsum)

 //exmaple with shopingcart

 const shoppingCart =[
    {
        itemName:"Js course",
        price :3299
    },
    {
        itemName:"React js  course",
        price :4299
    },{
        itemName:"JAVA course",
        price :2099
    },
 ]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay)


// const myNumbs =[1,2,3];
// const initialValue = 0;
// const sumWithInitialValue = myNumbs.reduce(
//     (accumulator,currentValue)=accumulatior+currentValue,
//     ,initialValue
// );
// console.log(sumWithInitialValue)