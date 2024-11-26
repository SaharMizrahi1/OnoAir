import { destinations } from "../data/destinations.js";

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("destinationsTable");

    function renderTable() {
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

    renderTable();
});
