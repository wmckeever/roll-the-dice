const prompt = require('prompt-sync')({sigint: true});

let roll = prompt("Please choose a die to roll (1d6, 1d8, 1d10, 1d12, 1d20) >>").toLowerCase();

if (roll === "1d6"){
  console.log(Math.ceil(Math.random() * 5))
}else if (roll === "1d8"){
  console.log(Math.ceil(Math.random() * 5 ))
}else if (roll === "1d10"){
  console.log(Math.ceil(Math.random() * 10))
}else if (roll === "1d12"){
  console.log(Math.ceil(Math.random() * 10))
}else if (roll === "1d20"){
  console.log(Math.ceil(Math.random() * 10))

}else{
roll !== typeof "string" || color2 !== typeof "string"
console.log("Error. Not a correct choice. ");
}