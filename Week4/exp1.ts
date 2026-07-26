// main.ts

import { Ticket } from "./TicketLogic";
import { Passenger } from "./Passenger";

// Passenger object
const traveler: Passenger = {
    name: "Suresh Kumar",
    age: 45,
    berthPreference: "Lower"
};

// Create Ticket
const myTicket = new Ticket(traveler, 1200, 12626);

// Print Ticket
myTicket.printTicket();