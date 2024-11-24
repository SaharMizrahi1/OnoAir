class Flight {
    constructor(flightNo, origin, destination, departureDate, departureTime, arrivalDate, arrivalTime, seats) {
        this.flightNo = flightNo;
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
        this.departureTime = departureTime;
        this.arrivalDate = arrivalDate;
        this.arrivalTime = arrivalTime;
        this.seats = seats;
    }
}

export default Flight;
