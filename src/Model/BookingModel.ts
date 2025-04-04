import { v4 as uuidv4 } from 'uuid';

export class BookingModel {
    bookingId: string;
    bookedDate: Date;
    travelDate: Date;
    arrivalStation: string;
    departureStation: string;
    passengerClass: string;
    seats: number;
    userId: string;
    trainList: string[];

    constructor(
        bookedDate: Date,
        travelDate: Date,
        arrivalStation: string,
        departureStation: string,
        passengerClass: string,
        seats: number,
        userId: string,
        trainList: string[]
    ) {
        this.bookingId = `BOOKING-${uuidv4()}`;
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