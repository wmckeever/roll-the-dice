const prompt = require('prompt-sync')({sigint: true});

let roll = Number(prompt("Would you like to roll a die?"));

if (roll === "yes"){
  console.log(Math.ceil(Math.random() * 5))

}else if(roll === "no"){
  console.log("Too bad. The odds were ever in your favor!")

}else{
roll == typeof "string" || color2 === typeof "string"
console.log("Error. Not a correct choice. ");
}
