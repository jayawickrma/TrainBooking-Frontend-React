export class BookingModel {
    bookingId: string;
    bookedDate: Date;  // Using Date instead of LocalDate for TypeScript
    travelDate: Date;
    arrivalStation: string;
    departureStation: string;
    passengerClass: string;
    seats: number;
    userId: string;
    trainList: string[];

    constructor(
        bookingId: string,
        bookedDate: Date,
        travelDate: Date,
        arrivalStation: string,
        departureStation: string,
        passengerClass: string,
        seats: number,
        userId: string,
        trainList: string[]
    ) {
        this.bookingId = bookingId;
        this.bookedDate = bookedDate;
        this.travelDate = travelDate;
        this.arrivalStation = arrivalStation;
        this.departureStation = departureStation;
        this.passengerClass = passengerClass;
        this.seats = seats;
        this.userId = userId;
        this.trainList = trainList;
    }
}