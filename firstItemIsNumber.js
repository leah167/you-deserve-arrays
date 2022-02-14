const prompt = require('prompt-sync')();

// must make array JSON.parse so it's not seen as a string
let userArray = JSON.parse(prompt("Enter an array: "));

let isFirstANum = false

let firstItem = userArray[0]

if (typeof firstItem === 'number') {

    isFirstANum = true

    console.log("The first item is a number.")

} else console.log("The first item is not a number")

// the number is not recognized as a number if it is in "quotations".