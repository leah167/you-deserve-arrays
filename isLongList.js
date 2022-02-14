const prompt = require('prompt-sync')();

// must make array JSON.parse so it's not seen as a string
let userArray = JSON.parse(prompt("Enter an array: "));

let atLeast10 = false;

let uAlength = userArray.length;

// console.log(uAlength)


if (uAlength >= 10) {

    atLeast10 = true

    console.log(atLeast10)


} else {
    console.log(atLeast10) 
}