// using for of loop with Objects
const arr1 = [1,23,43,54,5]
for (const num of arr1){
console.log(num);
}

// for loop with string
const greeting = "hello world "
 for (const value of greeting){
    console.log(`each charcter is ${value}`);
 }

// MAPS 
// it has unique value also maintaing its order and it is object 
// map si collection of pair key value
const map = new Map()
map.set('IN',"india")
map.set('BR',"bihar")
map.set('RJ',"Rajasthan")
//console.log(map)
for(const [key,value] of map){
    console.log(key,':-',value);
}

// for loop with OBJECT
const myObjects = {
    'game1 ':'NFS',
    'game2': 'spiderMan'
}
// HERE FOR OF LOOP NOT WORKING AND here object is not iterationable 
for(const objvalue of myObjects){
    console.log(objvalue)
}


// by creating new objects 
const newObj ={
    js:'javascript',
    cpp: 'cpp',
    rb:"ruby",
    swift:"swift bt apple"
}
//here we using FOR IN loop 
for(const key in newObj){
    console.log(`${key} shortcut is for ${newObj[key]}`);
}

// using FOR IN loop with array 
const arr =[112,343,45,66]
for(const val in arr){
    console.log(`The value at Index no ${val} is ${arr[val]}`)
}

// map ke sath FOR IN use nhi kar skte hai kyuki wo iteratble nhi hai 