// Define a namespace
namespace GovernmentID {

    // Private constant (not exported)
    const aadhaarLength = 12;

    // Aadhaar validation
    export function validateAadhaar(id: string): boolean {
        const isNumeric = /^\d+$/.test(id);
        return isNumeric && id.length === aadhaarLength;
    }

    // PAN validation
    export function validatePAN(pan: string): boolean {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan.toUpperCase());
    }

    // Nested namespace
    export namespace Tax {

        export function calculateGST(amount: number): number {
            return amount * 0.18; // 18% GST
        }

    }
}

// -------- Using the Namespace --------

const myAadhaar = "123456789012";
const myPAN = "ABCDE1234F";

console.log(`Is Aadhaar Valid? ${GovernmentID.validateAadhaar(myAadhaar)}`);
console.log(`Is PAN Valid? ${GovernmentID.validatePAN(myPAN)}`);

// Accessing nested namespace
const billAmount = 1000;
const tax = GovernmentID.Tax.calculateGST(billAmount);

console.log(`GST on ₹${billAmount} is ₹${tax}`);

// ERROR DEMO (Uncomment to see error)
// console.log(GovernmentID.aadhaarLength);