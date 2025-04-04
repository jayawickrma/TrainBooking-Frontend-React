import {configureStore} from "@reduxjs/toolkit";
import TrainSlice from "../Slice/TrainSlice.ts";
import UserSlice from "../Slice/UserSlice.ts";
import BookingSlice from "../Slice/BookingSlice.ts";
import ScheduleSlice from "../Slice/ScheduleSlice.ts";
import PaymentSlice from "../Slice/PaymentSlice.ts";

export const store =configureStore({
    reducer:{
        trains :TrainSlice,
        user :UserSlice,
        booking :BookingSlice,
        schedule :ScheduleSlice,
        payment:PaymentSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
