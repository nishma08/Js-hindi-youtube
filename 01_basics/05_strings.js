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

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-3, 4)
console.log(anotherString);

const newStringOne = "   nishma    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nishma.com/nishma%20dhungana"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'));

console.log(gameName.split('-')); // based on '-'

const string1 = 'Hello'
const string2 = 'Nishma!'

console.log(string1.concat(' ' + string2)); // concatinating two strings









