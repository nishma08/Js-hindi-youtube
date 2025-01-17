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


// ++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap memory(Non- primitive)
/*
let myYoutubeName = "nishmalearns"

let anotherName = myYoutubeName
anotherName = "learningJouney"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@321"
}

let userTwo = userOne

userTwo.email = "nishma@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
*/

let x= 5
let y= x
y=10

console.log(y);
console.log(x);

let nishma = {
    age: 20,
    gender: "female"
}

let priya = nishma

priya.age = 22

console.log(priya.age);
console.log(nishma.age);

