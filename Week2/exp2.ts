// Demonstration of Traditional Functions and Arrow Functions in TypeScript

// 1. Traditional Function
function addTraditional(a: number, b: number): number {
    return a + b;
}

// 2. Arrow Function
const addArrow = (a: number, b: number): number => {
    return a + b;
};

// Traditional Function for Greeting
function greetTraditional(name: string): string {
    return "Hello, " + name;
}

// Arrow Function for Greeting
const greetArrow = (name: string): string => {
    return "Hello, " + name;
};

// Function Calls
console.log("Traditional Add:", addTraditional(10, 20));
console.log("Arrow Add:", addArrow(10, 20));

console.log("Traditional Greeting:", greetTraditional("Niharika"));
console.log("Arrow Greeting:", greetArrow("Niharika"));