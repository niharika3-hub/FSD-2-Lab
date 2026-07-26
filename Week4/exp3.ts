// Demonstration of Generic Variables, Functions, and Constraints

// 1. Generic Variable
let numberValue: Array<number> = [10, 20, 30];
let stringValue: Array<string> = ["Apple", "Banana", "Mango"];

console.log("Number Array:", numberValue);
console.log("String Array:", stringValue);

// 2. Generic Function
function display<T>(value: T): T {
    return value;
}

console.log("Generic Number:", display<number>(100));
console.log("Generic String:", display<string>("TypeScript"));
console.log("Generic Boolean:", display<boolean>(true));

// 3. Generic Constraint
interface Person {
    name: string;
}

function printName<T extends Person>(person: T): void {
    console.log("Name:", person.name);
}

printName({ name: "Niharika" });
printName({ name: "Jaya", age: 22 }); // Extra properties are allowed

// The following will give an error because 'name' is missing
// printName({ age: 20 });