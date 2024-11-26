class Booking {
    constructor(origin, boarding, destination, landing, passengers, image) {
        this.origin = origin; // The flight's origin location
        this.boarding = boarding; // The boarding date and time
        this.destination = destination; // The flight's destination
        this.landing = landing; // The landing date and time
        this.passengers = passengers; // The number of passengers
        this.image = image; // URL for an image related to the booking (e.g., destination photo)
    }
}

export default Booking;
