// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

let markHeight = 1.69;
let markMass = 78;
let markBMI;
let johnBMI;
function calcBMIs() {
  markBMI = markMass / markHeight ** 2;
  johnBMI = johnMass / (johnHeight * johnHeight);
}

let johnHeight = 1.95;
let johnMass = 92;

function calcJohnBMI() {}

let markHigherBMI;
let message;
function checkMessage() {
  if (markHigherBMI == true) {
    message = "Mark has a higher BMI than John";
  } else {
    message = "John has a higher BMI than Mark";
  }
}

function compare() {
  if (markBMI > johnBMI) {
    markHigherBMI = true;
  } else markHigherBMI = false;
}
calcBMIs();
checkMessage();
compare();
console.log(message);
markHeight = 1.88;
markMass = 95;
johnHeight = 1.76;
johnMass = 85;

calcBMIs();
checkMessage();
compare();

console.log(message);
