// Class Implementation with Access Modifiers

class DigitalWallet {

    // PUBLIC: Accessible from anywhere
    public holderName: string;

    // PRIVATE: Accessible only within this class
    private balance: number;
    private secretPin: number;

    // PROTECTED: Accessible in this class and derived classes
    protected loyaltyPoints: number = 0;

    // Constructor
    constructor(name: string, initialDeposit: number, pin: number) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }

    // Public method
    public withdrawMoney(amount: number, enteredPin: number): void {

        if (this.verifyPin(enteredPin)) {

            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`${amount} withdrawn successfully.`);
                console.log(`Remaining Balance: ${this.balance}`);
            } else {
                console.log("Insufficient funds in your wallet.");
            }

        } else {
            console.log("Incorrect PIN. Transaction declined.");
        }
    }

    // Private method
    private verifyPin(pin: number): boolean {
        return this.secretPin === pin;
    }
}

// Child class to demonstrate protected
class PremiumWallet extends DigitalWallet {

    public addBonus(): void {

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