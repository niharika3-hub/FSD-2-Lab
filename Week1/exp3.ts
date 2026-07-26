// Demonstration of Type Annotations in TypeScript

// 1. Variable Annotations
let studentName: string = "Niharika";
let age: number = 20;
let isStudent: boolean = true;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// 2. Function Parameter and Return Type Annotations
function add(num1: number, num2: number): number {
    return num1 + num2;
}

let result: number = add(10, 20);
console.log("Sum:", result);

// Function with void return type
function displayMessage(message: string): void {
    console.log("Message:", message);
}

displayMessage("Welcome to TypeScript!");

// 3. Array Annotations
let numbers: number[] = [10, 20, 30, 40, 50];
let fruits: string[] = ["Apple", "Banana", "Mango"];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);