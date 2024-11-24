import Destination from "../classes/destination.js";

const destinations = [
    new Destination("TLV", "Tel Aviv", "Ben Gurion Airport", "https://www.iaa.gov.il", "img/tlv.png"),
    new Destination("JFK", "New York", "John F. Kennedy Airport", "https://www.jfkairport.com", "img/jfk.png")
];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("destinationsTable");
    destinations.forEach(dest => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${dest.code}</td>
            <td>${dest.name}</td>
            <td>${dest.airportName}</td>
            <td><a href="${dest.airportUrl}" target="_blank">Visit</a></td>
        `;
        table.appendChild(row);
    });
});
