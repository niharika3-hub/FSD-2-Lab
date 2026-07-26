"use strict";
// Demonstration of Generic Variables, Functions, and Constraints
// 1. Generic Variable
let numberValue = [10, 20, 30];
let stringValue = ["Apple", "Banana", "Mango"];
console.log("Number Array:", numberValue);
console.log("String Array:", stringValue);
// 2. Generic Function
function display(value) {
    return value;
}
console.log("Generic Number:", display(100));
console.log("Generic String:", display("TypeScript"));
console.log("Generic Boolean:", display(true));
function printName(person) {
    console.log("Name:", person.name);
}
printName({ name: "Niharika" });
printName({ name: "Jaya", age: 22 }); // Extra properties are allowed
// The following will give an error because 'name' is missing
// printName({ age: 20 });
