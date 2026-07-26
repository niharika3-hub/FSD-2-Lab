// TicketLogic.ts
import { GST_RATE, CONVENIENCE_FEE } from "./Constants";
export class Ticket {
    passenger;
    baseFare;
    trainNumber;
    constructor(passenger, baseFare, trainNumber) {
        this.passenger = passenger;
        this.baseFare = baseFare;
        this.trainNumber = trainNumber;
    }
    // Calculate final fare
    calculateFinalFare() {
        const taxAmount = this.baseFare * GST_RATE;
        return this.baseFare + taxAmount + CONVENIENCE_FEE;
    }
    // Display ticket
    printTicket() {
        console.log("----- E-Ticket Confirmed -----");
        console.log(`Passenger : ${this.passenger.name} (${this.passenger.age})`);
        console.log(`Train No  : ${this.trainNumber}`);
        console.log(`Total Fare: ₹${this.calculateFinalFare()}`);
        console.log("------------------------------");
    }
}
