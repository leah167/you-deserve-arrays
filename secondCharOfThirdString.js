const prompt = require('prompt-sync')();

// must make array JSON.parse so it's not seen as a string
let userArray = JSON.parse(prompt("Enter an array: "));

let thirdItem = userArray[2];

let secondChar = thirdItem[1];

if (typeof thirdItem === 'string') {
    
console.log("The second character in the third item in the array is: " + secondChar);

} else {
    console.log("error");
}
