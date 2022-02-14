const prompt = require('prompt-sync')();

// must make array JSON.parse so it's not seen as a string
let userArray = JSON.parse(prompt("Enter an array: "));

// did not work with this variable
// let userArrayLength = userArray.lenght;

let lastItem = userArray[userArray.length-1]

console.log("The last item in the array is: " + lastItem);
// console.log("The length of this array is: " + userArrayLength);
// console.log("This is type: " + typeof userArray);