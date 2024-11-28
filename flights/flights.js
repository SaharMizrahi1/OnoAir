import { flights } from "../data/flights.js";

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("flightsTable");

    flights.forEach(flight => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${flight.flightNo}</td>
            <td>${flight.origin}</td>
            <td>${flight.destination}</td>
            <td>${flight.departureDate} ${flight.departureTime}</td>
            <td>${flight.arrivalDate} ${flight.arrivalTime}</td>
            <td>${flight.seats}</td>
        `;
        table.appendChild(row);
    });
});
