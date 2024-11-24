import Flight from "../classes/flight.js";

const flights = [
    new Flight("W61283", "Tel Aviv", "Krakow", "2024-12-25", "10:00", "2024-12-25", "14:00", 180),
    new Flight("LX8396", "Zurich", "Larnaca", "2024-12-30", "08:00", "2024-12-30", "12:00", 150)
];

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
