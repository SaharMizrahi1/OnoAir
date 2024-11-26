document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("destinationsTable");

    // Fetch destinations data from JSON file
    fetch("../data/destinations.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch destinations data");
            }
            return response.json();
        })
        .then(destinations => {
            renderTable(destinations);
        })
        .catch(error => console.error("Error loading destinations:", error));

    // Function to render the destinations table
    function renderTable(destinations) {
        tableBody.innerHTML = ""; // Clear existing rows
        destinations.forEach(destination => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${destination.name}</td>
                <td>${destination.airportName}</td>
                <td><a href="${destination.airportUrl}" target="_blank">Visit</a></td>
            `;
            tableBody.appendChild(row);
        });
    }
});
