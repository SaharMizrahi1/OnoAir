document.addEventListener("DOMContentLoaded", () => {
    const flightDetailsDiv = document.getElementById("flightDetails");
    const passengerDetailsDiv = document.getElementById("passengerDetails");
    const numPassengersInput = document.getElementById("numPassengers");

    // Retrieve flight details from query parameters
    const params = new URLSearchParams(window.location.search);
    const flightNo = params.get("flightNo");
    const origin = params.get("origin");
    const destination = params.get("destination");
    const boarding = params.get("boarding");
    const landing = params.get("landing");

    // Display flight details
    flightDetailsDiv.innerHTML = `
        <p><strong>Origin:</strong> ${origin} <strong>Boarding:</strong> ${boarding}</p>
        <p><strong>Destination:</strong> ${destination} <strong>Landing:</strong> ${landing}</p>
    `;

    // Generate dynamic passenger fields
    function createPassengerFields(numPassengers) {
        passengerDetailsDiv.innerHTML = ""; // Clear existing fields
        for (let i = 1; i <= numPassengers; i++) {
            const fieldset = document.createElement("fieldset");
            fieldset.innerHTML = `
                <legend>Passenger ${i}</legend>
                <label for="passengerName${i}">Name:</label>
                <input type="text" id="passengerName${i}" name="passengerName${i}" required>
                <label for="passportId${i}">Passport ID:</label>
                <input type="text" id="passportId${i}" name="passportId${i}" required>
            `;
            passengerDetailsDiv.appendChild(fieldset);
        }
    }

    // Listen for passenger number input
    numPassengersInput.addEventListener("change", () => {
        const numPassengers = parseInt(numPassengersInput.value, 10);
        createPassengerFields(numPassengers);
    });

    // Save booking on form submission
    document.getElementById("passengerForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const numPassengers = parseInt(numPassengersInput.value, 10);
        if (isNaN(numPassengers) || numPassengers <= 0) {
            alert("Please enter a valid number of passengers.");
            return;
        }

        // Collect passenger data
        const passengers = [];
        for (let i = 1; i <= numPassengers; i++) {
            const name = document.getElementById(`passengerName${i}`).value;
            const passportId = document.getElementById(`passportId${i}`).value;
            if (!name || !passportId) {
                alert(`Please fill out all details for Passenger ${i}.`);
                return;
            }
            passengers.push({ name, passportId });
        }

        // Save booking (example: log to console or send to backend)
        const booking = {
            flightNo,
            origin,
            destination,
            boarding,
            landing,
            passengers
        };

        console.log("Booking saved:", booking);
        alert("Booking saved successfully!");
        window.location.href = "bookings.html";
    });
});
