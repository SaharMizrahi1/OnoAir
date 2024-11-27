import { flights } from "../data/flights.js";

document.addEventListener("DOMContentLoaded", () => {
    const originSelect = document.getElementById("origin");
    const destinationSelect = document.getElementById("destination");
    const flightsTable = document.getElementById("flightsTable");

    // Populate dropdowns
    function populateDropdowns() {
        const origins = [...new Set(flights.map(flight => flight.origin))];
        const destinations = [...new Set(flights.map(flight => flight.destination))];

        origins.forEach(origin => {
            const option = document.createElement("option");
            option.value = origin;
            option.textContent = origin;
            originSelect.appendChild(option);
        });

        destinations.forEach(destination => {
            const option = document.createElement("option");
            option.value = destination;
            option.textContent = destination;
            destinationSelect.appendChild(option);
        });
    }

    // Render flights table
    function renderTable(filter = {}) {
        flightsTable.innerHTML = ""; // Clear table

        // Filter flights
        const filteredFlights = flights.filter(flight => {
            const matchesOrigin = !filter.origin || flight.origin === filter.origin;
            const matchesDestination = !filter.destination || flight.destination === filter.destination;
            return matchesOrigin && matchesDestination;
        });

        // If no flights match the filters, show a message
        if (filteredFlights.length === 0) {
            const noFlightsRow = document.createElement("tr");
            noFlightsRow.innerHTML = `
                <td colspan="4" style="text-align: center;">Sorry, we couldn’t find any flights matching your selected origin and destination. Please try different locations or check back later.</td>
            `;
            flightsTable.appendChild(noFlightsRow);
            return;
        }

        // Otherwise, render matching flights
        filteredFlights.forEach(flight => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${flight.flightNo}</td>
                <td>${flight.origin}</td>
                <td>${flight.destination}</td>
                <td>
                    <button 
                        class="book-btn" 
                        onclick="window.location.href='book-flight-details.html?flightNo=${encodeURIComponent(flight.flightNo)}&origin=${encodeURIComponent(flight.origin)}&destination=${encodeURIComponent(flight.destination)}'">
                        Book
                    </button>
                </td>
            `;
            flightsTable.appendChild(row);
        });
    }

    // Filter flights
    originSelect.addEventListener("change", () => {
        renderTable({ origin: originSelect.value, destination: destinationSelect.value });
    });

    destinationSelect.addEventListener("change", () => {
        renderTable({ origin: originSelect.value, destination: destinationSelect.value });
    });

    // Initialize page
    populateDropdowns();
    renderTable();
});
