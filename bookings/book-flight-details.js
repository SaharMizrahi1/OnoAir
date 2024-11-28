import { flights } from "../data/flights.js";

document.addEventListener("DOMContentLoaded", () => {
    const flightDetailsDiv = document.getElementById("flightDetails");
    const passengerDetailsDiv = document.getElementById("passengerDetails");
    const numPassengersInput = document.getElementById("numPassengers");

    const params = new URLSearchParams(window.location.search);
    const flightNo = params.get("flightNo");

    const selectedFlight = flights.find(flight => flight.flightNo === flightNo);

    if (!selectedFlight) {
        alert("Flight not found. Please go back and select a valid flight.");
        return;
    }

    const { origin, destination, departureDate, departureTime, arrivalDate, arrivalTime, seats } = selectedFlight;

    // Display flight details
    flightDetailsDiv.innerHTML = `
        <p><strong>Flight No:</strong> ${flightNo}</p>
        <p><strong>Origin:</strong> ${origin}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Departure:</strong> ${departureDate} ${departureTime}</p>
        <p><strong>Arrival:</strong> ${arrivalDate} ${arrivalTime}</p>
        <p><strong>Number Of Seats:</strong> ${seats}</p>
    `;

    // Generate dynamic passenger fields
    function createPassengerFields(numPassengers) {
        passengerDetailsDiv.innerHTML = "";
        for (let i = 1; i <= numPassengers; i++) {
            const fieldset = document.createElement("fieldset");
            fieldset.innerHTML = `
                <legend>Passenger ${i}</legend>
                <label for="passengerName${i}">Name:</label>
                <input type="text" id="passengerName${i}" name="passengerName${i}" required pattern="^[A-Za-z ]+$" title="Name should only contain letters and spaces.">
                <label for="passportId${i}">Passport ID:</label>
                <input type="text" id="passportId${i}" name="passportId${i}" required pattern="^[A-Za-z0-9]+$" title="Passport ID should only contain letters and numbers.">
            `;
            passengerDetailsDiv.appendChild(fieldset);
        }
    }

    numPassengersInput.addEventListener("change", () => {
        const numPassengers = parseInt(numPassengersInput.value, 10);
        if (numPassengers > seats) {
            alert(`The number of passengers exceeds the available seats (${seats}).`);
            numPassengersInput.value = seats;
            createPassengerFields(seats);
        } else {
            createPassengerFields(numPassengers);
        }
    });

    document.getElementById("passengerForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const numPassengers = parseInt(numPassengersInput.value, 10);
        if (isNaN(numPassengers) || numPassengers <= 0) {
            alert("Please enter a valid number of passengers.");
            return;
        }

        const passengers = [];
        const passportIds = new Set(); // For duplicate passport check
        for (let i = 1; i <= numPassengers; i++) {
            const name = document.getElementById(`passengerName${i}`).value.trim();
            const passportId = document.getElementById(`passportId${i}`).value.trim();

            if (!name || !passportId) {
                alert(`Please fill out all details for Passenger ${i}.`);
                return;
            }

            if (!/^[A-Za-z ]+$/.test(name)) {
                alert(`Passenger ${i}'s name should only contain letters and spaces.`);
                return;
            }

            if (!/^[A-Za-z0-9]+$/.test(passportId)) {
                alert(`Passenger ${i}'s passport ID should only contain letters and numbers.`);
                return;
            }

            if (passportIds.has(passportId)) {
                alert(`Duplicate passport ID found: ${passportId} for Passenger ${i}.`);
                return;
            }

            passportIds.add(passportId);
            passengers.push({ name, passportId });
        }

        const booking = {
            flightNo,
            origin,
            destination,
            departure: `${departureDate} ${departureTime}`,
            arrival: `${arrivalDate} ${arrivalTime}`,
            passengers
        };

        console.log("Booking saved:", booking);
        alert(`Booking saved successfully!\n\nBooking Details:\n${JSON.stringify(booking, null, 2)}`);
        window.location.href = "bookings.html";

       
    });

    if (!flightNo && flights.length > 0) {
        const firstFlight = flights[0];
        window.location.href = `book-flight-details.html?flightNo=${encodeURIComponent(firstFlight.flightNo)}`;
    }
});
