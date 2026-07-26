// main.ts
import { Ticket } from "./TicketLogic";
// Passenger object
const traveler = {
    name: "Suresh Kumar",
    age: 45,
    berthPreference: "Lower"
};
// Create Ticket
const myTicket = new Ticket(traveler, 1200, 12626);
// Print Ticket
myTicket.printTicket();
