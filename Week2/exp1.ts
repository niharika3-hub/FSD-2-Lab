// Demonstration of Functions, Parameters, and Return Types in TypeScript

// Function with parameters and return type
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Function with parameters and string return type
function greet(name: string): string {
    return "Hello, " + name + "!";
}

// Function with no return value (void)
function displayMessage(message: string): void {
    console.log(message);
}

// Calling the functions
let sum: number = add(10, 20);
console.log("Sum:", sum);

let greeting: string = greet("Niharika");
console.log(greeting);

displayMessage("Welcome to TypeScript!");