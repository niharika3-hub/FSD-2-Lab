"use strict";
// Demonstration of Traditional Functions and Arrow Functions in TypeScript
// 1. Traditional Function
function addTraditional(a, b) {
    return a + b;
}
// 2. Arrow Function
const addArrow = (a, b) => {
    return a + b;
};
// Traditional Function for Greeting
function greetTraditional(name) {
    return "Hello, " + name;
}
// Arrow Function for Greeting
const greetArrow = (name) => {
    return "Hello, " + name;
};
// Function Calls
console.log("Traditional Add:", addTraditional(10, 20));
console.log("Arrow Add:", addArrow(10, 20));
console.log("Traditional Greeting:", greetTraditional("Niharika"));
console.log("Arrow Greeting:", greetArrow("Niharika"));
