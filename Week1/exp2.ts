// Demonstration of Special Data Types in TypeScript

// 1. Any Data Type
let data: any;

data = 100;
console.log("Any (Number):", data);

data = "Hello TypeScript";
console.log("Any (String):", data);

data = true;
console.log("Any (Boolean):", data);

// 2. Unknown Data Type
let value: unknown;

value = "Niharika";

// Type checking before using unknown
if (typeof value === "string") {
    console.log("Unknown (String):", value.toUpperCase());
}

value = 50;

if (typeof value === "number") {
    console.log("Unknown (Number):", value + 10);
}

// 3. Void Data Type
function displayMessage(): void {
    console.log("This function does not return any value.");
}

displayMessage();