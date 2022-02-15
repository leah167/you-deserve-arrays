const prompt = require('prompt-sync')();

// must make array JSON.parse so it's not seen as a string
let userArray = JSON.parse(prompt("Enter an array: "));

// this variable lets us set conditions to the third item in the array specifically
let thirdItem = userArray[2];

// this variable lets us get the second character of the third item
let secondChar = thirdItem[1];

// typeof is how you set type conditions
if (typeof thirdItem === 'string') {
    
console.log("The second character in the third item in the array is: " + secondChar);

} else {
    console.log("error");
}
