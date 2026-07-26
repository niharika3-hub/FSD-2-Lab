"use strict";
// Demonstration of Functions, Parameters, and Return Types in TypeScript
// Function with parameters and return type
function add(num1, num2) {
    return num1 + num2;
}
// Function with parameters and string return type
function greet(name) {
    return "Hello, " + name + "!";
}
// Function with no return value (void)
function displayMessage(message) {
    console.log(message);
}
// Calling the functions
let sum = add(10, 20);
console.log("Sum:", sum);
let greeting = greet("Niharika");
console.log(greeting);
displayMessage("Welcome to TypeScript!");
