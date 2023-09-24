// some operations
console.log(1+2)
// output will be 3
console.log("1"+32)
// here output is 132 becouse it consider all parameter as sting accouring to first value 
console.log("3"+3+32) 
//here output is 3332 bcz it consider all parameter as string and it is decided on the basis of "3" if "3" is palce of 32 then value will different bcz first value is integer
console.log(3+32+"3")
//here output is 353 here addition done first btween 3 and 32 then string concationtion done 

console.log(true);
//here output is only true 
console.log(+true);
//but here output is 1 bcz true is already boolean but after increament it become 1
//console.log(true+);
// it show error
console.log(-true)