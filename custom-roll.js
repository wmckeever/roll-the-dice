const prompt = require('prompt-sync')({sigint: true});

let sides = Number(prompt("Please choose a number of sides for your die:) >> "));

console.log(Math.ceil(Math.random() * sides));
