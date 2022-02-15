const prompt = require('prompt-sync')();

// must make array JSON.parse so it's not seen as a string
let userArray = JSON.parse(prompt("Enter an array: "));

// establish boolean
let isFirstANum = false

let firstItem = userArray[0]

if (typeof firstItem === 'number') {
    
     //    redefine boolean under this condition
    isFirstANum = true

    console.log(isFirstANum)

} else console.log(isFirstANum)

// the number is not recognized as a number if it is in "quotations".