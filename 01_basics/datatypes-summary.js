// #primitive DataType (call by value)
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456784356989768898n


//Reference (Non- primitive) [allocated by reference in memory]

//Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = 
{ 
    name: "nishma",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof outsideTemp);
console.log(typeof scoreValue);

console.log(typeof myFunction); // result shows function byt rerferred as function object/ object function
console.log(typeof anotherId);
console.log(typeof outsideTemp);
console.log(typeof myObj);

// all of the non-primitive data types are given function datatype