document.addEventListener("DOMContentLoaded", () => {
    const passengersDiv = document.getElementById("passengers");

    document.getElementById("numPassengers").addEventListener("input", (e) => {
        passengersDiv.innerHTML = ""; // Clear existing fields
        const numPassengers = parseInt(e.target.value, 10);
        for (let i = 1; i <= numPassengers; i++) {
            const passengerDiv = document.createElement("div");
            passengerDiv.innerHTML = `
                <h3>Passenger ${i}</h3>
                <input type="text" placeholder="Name" required>
                <input type="text" placeholder="Passport ID" required>
            `;
            passengersDiv.appendChild(passengerDiv);
        }
    });
});
