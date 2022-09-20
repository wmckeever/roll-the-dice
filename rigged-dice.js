// Needs double the probability to returning a specific value

const prompt = require('prompt-sync')({sigint: true});

// Asks for the user to input
let riggedNumber = Number(prompt('Please choose a rigged number between 1 and 6: >> '));


let roll = (Math.ceil(Math.random() * 7))

// Lets the user know that the rigged number they chose has been rolled.

if(roll === 7){
  console.log("Your rigged number of" + riggedNumber + "has been rolled.");
}else{
  console.log(roll);
}



