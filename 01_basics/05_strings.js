const name = "nishma"
const repoCount = 10

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new  String('nishma-gamer')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2,4)
console.log(anotherString);



