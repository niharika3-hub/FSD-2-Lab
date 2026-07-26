"use strict";
// Define a namespace
var GovernmentID;
(function (GovernmentID) {
    // Private constant (not exported)
    const aadhaarLength = 12;
    // Aadhaar validation
    function validateAadhaar(id) {
        const isNumeric = /^\d+$/.test(id);
        return isNumeric && id.length === aadhaarLength;
    }
    GovernmentID.validateAadhaar = validateAadhaar;
    // PAN validation
    function validatePAN(pan) {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan.toUpperCase());
    }
    GovernmentID.validatePAN = validatePAN;
    // Nested namespace
    let Tax;
    (function (Tax) {
        function calculateGST(amount) {
            return amount * 0.18; // 18% GST
        }
        Tax.calculateGST = calculateGST;
    })(Tax = GovernmentID.Tax || (GovernmentID.Tax = {}));
})(GovernmentID || (GovernmentID = {}));
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
