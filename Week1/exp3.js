"use strict";
// Demonstration of Type Annotations in TypeScript
// 1. Variable Annotations
let studentName = "Niharika";
let age = 20;
let isStudent = true;
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
// 2. Function Parameter and Return Type Annotations
function add(num1, num2) {
    return num1 + num2;
}
let result = add(10, 20);
console.log("Sum:", result);
// Function with void return type
function displayMessage(message) {
    console.log("Message:", message);
}
displayMessage("Welcome to TypeScript!");
// 3. Array Annotations
let numbers = [10, 20, 30, 40, 50];
let fruits = ["Apple", "Banana", "Mango"];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
