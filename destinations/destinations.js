document.addEventListener("DOMContentLoaded", () => {
    const destinations = [
        { code: "TLV", name: "Tel Aviv", airportName: "Ben Gurion Airport", airportUrl: "https://www.iaa.gov.il/en/" },
        { code: "JFK", name: "New York", airportName: "John F. Kennedy International Airport", airportUrl: "https://www.jfkairport.com/" }
    ];

    const tableBody = document.getElementById("destinationsTable");

    function renderTable() {
        tableBody.innerHTML = ""; // Clear existing rows
        destinations.forEach(destination => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${destination.code}</td>
                <td>${destination.name}</td>
                <td>${destination.airportName}</td>
                <td><a href="${destination.airportUrl}" target="_blank">Visit</a></td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Render the initial table
    renderTable();

    // Handle adding a new destination
    document.getElementById("addDestinationForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const code = document.getElementById("destinationCode").value;
        const name = document.getElementById("destinationName").value;
        const airportName = document.getElementById("airportName").value;
        const airportUrl = document.getElementById("airportUrl").value;

        if (!code || !name || !airportName || !airportUrl) {
            alert("All fields are required!");
            return;
        }

        destinations.push({ code, name, airportName, airportUrl });
        renderTable();
        alert("Destination added successfully!");
    });
});
