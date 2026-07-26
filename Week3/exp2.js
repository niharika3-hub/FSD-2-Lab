"use strict";
// Class Implementation with Access Modifiers
class DigitalWallet {
    // PUBLIC: Accessible from anywhere
    holderName;
    // PRIVATE: Accessible only within this class
    balance;
    secretPin;
    // PROTECTED: Accessible in this class and derived classes
    loyaltyPoints = 0;
    // Constructor
    constructor(name, initialDeposit, pin) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }
    // Public method
    withdrawMoney(amount, enteredPin) {
        if (this.verifyPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`${amount} withdrawn successfully.`);
                console.log(`Remaining Balance: ${this.balance}`);
            }
            else {
                console.log("Insufficient funds in your wallet.");
            }
        }
        else {
            console.log("Incorrect PIN. Transaction declined.");
        }
    }
    // Private method
    verifyPin(pin) {
        return this.secretPin === pin;
    }
}
// Child class to demonstrate protected
class PremiumWallet extends DigitalWallet {
    addBonus() {
        // Accessible because loyaltyPoints is protected
        this.loyaltyPoints += 100;
        console.log(`Bonus Added! Total Loyalty Points: ${this.loyaltyPoints}`);
        // Not allowed
        // this.balance += 500;
    }
}
// ---------- Execution ----------
const myWallet = new DigitalWallet("Arjun Varma", 5000, 1234);
// Accessing public property
console.log(`Welcome, ${myWallet.holderName}`);
// The following statements will give errors if uncommented
// console.log(myWallet.balance);      // Error: balance is private
// myWallet.verifyPin(1234);           // Error: verifyPin is private
// Using public method
myWallet.withdrawMoney(1000, 1234);
// Child class object
const premium = new PremiumWallet("Niharika", 10000, 5678);
premium.addBonus();
premium.withdrawMoney(2000, 5678);
