// javascripts executions context(EC)
// global  EC is this

// 1> global EC
// 2> function EC
// 3> eval EC

// executions process
// 1> memory creation phase 
// 2> execution phase


// CONTROL FLOW
// falsy Values

// false ,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// '0','false'," ",[],{},function(){}

// Nullish coalescing operator (??) : null undefined
//it mostly use for database 
//it is mostly use for null and undefined 
// jaise ki agar error aayre to usko kaise handle kare ya kuch bhi aaye to uska value kya dale 

// let val1 = 5 ?? 10
// val1 ==null ?? 10
// val1 = undefined??15
// val1 = null??10??20
// console.log(val1);


// nullish coalescing operator and terniary operator
//terniary Operator

// syntax =condition ?true : false
// const iceTea =100
// iceTea<=99 ? console.log("less than 99"):console.log("more than 99")