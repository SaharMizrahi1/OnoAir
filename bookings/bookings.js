import { bookings } from "../data/bookings.js";

document.addEventListener("DOMContentLoaded", () => {
    const bookingsList = document.getElementById("bookingsList");

  
    bookings.forEach((booking) => {
        const bookingDiv = document.createElement("div");
        bookingDiv.classList.add("booking-item");

        const bookingImageDiv = document.createElement("div");
        bookingImageDiv.classList.add("booking-image");
        const img = document.createElement("img");
        img.src = booking.image || "https://via.placeholder.com/100";
        img.alt = "Destination Image";
        bookingImageDiv.appendChild(img);

        const bookingDetailsDiv = document.createElement("div");
        bookingDetailsDiv.classList.add("booking-details");

        const originP = document.createElement("p");
        originP.textContent = `Origin: ${booking.origin} Boarding: ${booking.boarding}`;
        const destinationP = document.createElement("p");
        destinationP.textContent = `Destination: ${booking.destination} Landing: ${booking.landing}`;
        const passengersP = document.createElement("p");
        passengersP.textContent = `No. of passengers: ${booking.passengers}`;

        bookingDetailsDiv.appendChild(originP);
        bookingDetailsDiv.appendChild(destinationP);
        bookingDetailsDiv.appendChild(passengersP);

        bookingDiv.appendChild(bookingImageDiv);
        bookingDiv.appendChild(bookingDetailsDiv);

        bookingsList.appendChild(bookingDiv);
    });
});
