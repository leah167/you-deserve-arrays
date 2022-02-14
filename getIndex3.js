const prompt = require('prompt-sync')();

// must make array JSON.parse so it's not seen as a string
let userArray = JSON.parse(prompt("Enter an array: "));

let index3 = userArray[3];

let lastItem = userArray[userArray.length-1]

if (userArray.length > 3) {

    console.log("The item at the third index in the array is: " + index3);
    
} else console.log("The last item in the array is: " + lastItem); 