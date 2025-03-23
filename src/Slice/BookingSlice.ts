import { BookingModel } from "../Model/BookingModel.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Services/api.ts";

const initialState: { bookings: BookingModel[] } = {
    bookings: [],
};

export type BookingRootState = {
    booking: {
        bookings: Array<{
            bookingId: string;
            bookedDate: Date;
            travelDate: Date;
            arrivalStation: string;
            departureStation: string;
            passengerClass: string;
            seats: number;
            userId: string;
            trainList: string[];
        }>;
    };
};

export const saveBooking = createAsyncThunk(
    "booking/saveBooking",
    async (bookingData: BookingModel, { dispatch }) => {
        try {
            const response = await api.post("booking/saveBooking", bookingData);
            dispatch(getAllBookings());
            return response.data;
        } catch (e) {
            console.error("Failed to save booking!", e);
            throw e;
        }
    }
);

export const updateBooking = createAsyncThunk(
    'booking/updateBooking',
    async (booking: BookingModel, { dispatch }) => {
        try {
            const response = await api.put(`booking/updateBooking/${booking.bookingId}`, booking);
            dispatch(getAllBookings());
            return response.data;
        } catch (e) {
            console.error("Failed to update booking!", e);
            throw e;
        }
    }
);

export const deleteBooking = createAsyncThunk(
    'booking/deleteBooking',
    async (bookingId: string) => {
        try {
            const response = await api.delete(`booking/deleteBooking`, {
                params: { id: bookingId }, // Send bookingId as a query parameter
            });
            return response.data;
        } catch (e) {
            console.error("Failed to delete booking:", e);
            throw e;
        }
    }
);

export const getAllBookings = createAsyncThunk(
    'booking/getAllBookings',
    async () => {
        try {
            const response = await api.get("booking/getAllBookings");
            return response.data;
        } catch (e) {
            console.log("Failed to get all bookings!", e);
            throw e;
        }
    }
);

export const getBookingById = createAsyncThunk(
    'booking/getBookingById',
    async (bookingId: string) => {
        try {
            const response = await api.get(`booking/getBooking/${bookingId}`);
            return response.data;
        } catch (e) {
            console.log("Failed to get booking by ID!", e);
            throw e;
        }
    }
);

export const getUserBookings = createAsyncThunk(
    'booking/getUserBookings',
    async (userId: string) => {
        try {
            const response = await api.get(`booking/getUserBookings/${userId}`);
            return response.data;
        } catch (e) {
            console.log("Failed to get user bookings!", e);
            throw e;
        }
    }
);

const bookingSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save booking reducers
            .addCase(saveBooking.pending, () => {
                console.log("Pending save booking");
            })
            .addCase(saveBooking.fulfilled, (state, action) => {
                if (action.payload) {
                    state.bookings = [...state.bookings, action.payload];
                }
            })
            .addCase(saveBooking.rejected, () => {
                console.error("Rejected save booking");
            })

            // Update booking reducers
            .addCase(updateBooking.fulfilled, (state, action) => {
                const updatedBooking = action.payload;
                const index = state.bookings.findIndex(b => b.bookingId === updatedBooking.bookingId);
                if (index !== -1) {
                    state.bookings[index] = updatedBooking;
                }
            })
            .addCase(updateBooking.pending, () => {
                console.log("Pending updating booking");
            })
            .addCase(updateBooking.rejected, () => {
                console.log("Rejected updating booking");
            })

            // Delete booking reducers
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.bookings = state.bookings.filter(b => b.bookingId !== action.meta.arg);
            })
            .addCase(deleteBooking.pending, () => {
                console.log("Pending to delete booking!");
            })
            .addCase(deleteBooking.rejected, () => {
                console.log("Rejected to delete booking");
            })

            // Get all bookings reducers
            .addCase(getAllBookings.fulfilled, (state, action) => {
                state.bookings = action.payload || [];
            })
            .addCase(getAllBookings.pending, () => {
                console.log("Pending get all bookings");
            })
            .addCase(getAllBookings.rejected, () => {
                console.log("Rejected get all bookings");
            })

            // Get booking by ID reducers
            .addCase(getBookingById.fulfilled, ( ) => {
                // Note: This doesn't update state.bookings since it's just fetching a single booking
                // If needed, you can add logic to update or add this booking to the state
            })

            // Get user bookings reducers
            .addCase(getUserBookings.fulfilled, (state, action) => {
                state.bookings = action.payload || [];
            })
    },
});

export default bookingSlice.reducer;