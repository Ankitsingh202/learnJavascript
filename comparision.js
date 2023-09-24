console.log("2">1);
console.log("22">1);
//here string value is compared with integer value so sometimes predicatble value nhi aata hai
console.log(null >0);
console.log(null==0);
console.log(null>=0);
// the reason is that an equality check == and comparisions <><==> works differently
// comparisions convert null to a number , treating it as 0 that's why (3) null >= 0 is true and (1) null>0 is false.
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<=0);
// similarly underfined har condition me false hi dega output 

// STRICT Check isme value ke sath sath datatype bhi check krta hai
// ===
console.log("3"===3)