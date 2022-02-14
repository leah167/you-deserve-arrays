const prompt = require('prompt-sync')();

// must make array JSON.parse so it's not seen as a string
let userArray = JSON.parse(prompt("Enter an array: "));