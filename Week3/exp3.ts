// ReadOnly & Static Properties

class BankBranch {

    // Static properties
    public static bankName: string = "HDFC Bank";
    public static totalAccountsCreated: number = 0;

    // Readonly property
    public readonly accountNumber: string;

    // Normal property
    public accountHolder: string;

    // Constructor
    constructor(name: string, accNo: string) {
        this.accountHolder = name;
        this.accountNumber = accNo;

        // Increase total accounts
        BankBranch.totalAccountsCreated++;
    }

    // Static method
    public static getBankPolicy(): void {
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
    }

    // Instance method
    public showAccount(): void {
        console.log(`Holder : ${this.accountHolder}`);
        console.log(`Acc No : ${this.accountNumber}`);
    }
}

// -------- Execution --------

// Accessing static members
console.log("Bank Name:", BankBranch.bankName);
BankBranch.getBankPolicy();

// Creating objects
const user1 = new BankBranch("Suresh Raina", "HDFC000123");
const user2 = new BankBranch("Deepika P", "HDFC000456");

// Display account details
user1.showAccount();
user2.showAccount();

// Readonly property (Cannot be modified)
// user1.accountNumber = "HDFC999999"; // Error

// Static property
console.log("Total Accounts Created:", BankBranch.totalAccountsCreated);