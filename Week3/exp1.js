"use strict";
// Class Implementation with Constructors
class FixedDeposit {
    // Properties
    customerName;
    principalAmount;
    interestRate;
    tenureYears;
    // Constructor Implementation
    constructor(name, amount, rate, years) {
        this.customerName = name;
        this.principalAmount = amount;
        // Default values
        this.interestRate = rate ?? 6.5;
        this.tenureYears = years ?? 1;
    }
    // Method to calculate maturity amount
    calculateMaturity() {
        const interest = (this.principalAmount * this.interestRate * this.tenureYears) / 100;
        return this.principalAmount + interest;
    }
    // Method to display details
    displayDetails() {
        console.log("----- FD Receipt -----");
        console.log(`Customer : ${this.customerName}`);
        console.log(`Principal: ₹${this.principalAmount}`);
        console.log(`Rate     : ${this.interestRate}%`);
        console.log(`Tenure   : ${this.tenureYears} year(s)`);
        console.log(`Maturity : ₹${this.calculateMaturity()}`);
        console.log("----------------------\n");
    }
}
// Scenario A - Default Constructor
const standardFD = new FixedDeposit("Rajesh Kumar", 50000);
// Scenario B - Overloaded Constructor
const seniorCitizenFD = new FixedDeposit("Anjali Sharma", 100000, 7.5, 3);
// Display Details
standardFD.displayDetails();
seniorCitizenFD.displayDetails();
// Updating Property
seniorCitizenFD.principalAmount = 110000;
console.log(`Updated Maturity for Anjali: ₹${seniorCitizenFD.calculateMaturity()}`);
