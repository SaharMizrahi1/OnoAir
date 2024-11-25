document.addEventListener("DOMContentLoaded", () => {
    const flights = [
        { flightNo: "W61283", origin: "Tel Aviv", destination: "Krakow" },
        { flightNo: "LX8396", origin: "Larnaca", destination: "Zurich" }
    ];

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
        flights
            .filter(flight => {
                const matchesOrigin = !filter.origin || flight.origin === filter.origin;
                const matchesDestination = !filter.destination || flight.destination === filter.destination;
                return matchesOrigin && matchesDestination;
            })
            .forEach(flight => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${flight.flightNo}</td>
                    <td>${flight.origin}</td>
                    <td>${flight.destination}</td>
                    <td>
                        <button 
                            class="book-btn" 
                            onclick="window.location.href='book-flight-details.html?flightNo=${encodeURIComponent(flight.flightNo)}&origin=${encodeURIComponent(flight.origin)}&destination=${encodeURIComponent(flight.destination)}'"
                        >
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
