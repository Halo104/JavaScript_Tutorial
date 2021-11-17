// How to create a constant in JS
const interestRate = 0.3;

// General variable
let theName = "James"; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let lastName = null;

// Creating first object
let person = {
  firstName: "Mosh",
  age: 40,
};

// Dot notation
person.firstName = "John";

// Bracket Notation, benifits is, it allows for variables as inputs, so it can be decided at run time
let selection = "firstName";
person[selection] = "Mary";

// Arrays
let selectedColours = ["red", "blue"];
selectedColours[2] = 35;

// Functions
function greet(inputName) {
  console.log("Hello " + inputName);
}

function square(inputNumber) {
  output = inputNumber * inputNumber;
  return output;
}

console.log(square(3));
