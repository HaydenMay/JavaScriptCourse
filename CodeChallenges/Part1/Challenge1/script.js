// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

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

let message =
  "True or False: Mark has a higher BMI than John. The Answer? Its ";
function compare() {
  if (markBMI > johnBMI) {
    markHigherBMI = true;
  } else markHigherBMI = false;

  console.log(message + markHigherBMI);
}
calcBMIs();
compare();
markHeight = 1.88;
markMass = 95;
johnHeight = 1.76;
johnMass = 85;

calcBMIs();
compare();
