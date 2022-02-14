const prompt = require('prompt-sync')();

// must make array JSON.parse so it's not seen as a string
let userArray = JSON.parse(prompt("Enter an array: "));

// let parsedJSON = JSON.parse(userArray);

// console.log("This is type: " + typeof userArray);



let firstItem = userArray[0]

console.log("The first item in the array is: " + firstItem);


