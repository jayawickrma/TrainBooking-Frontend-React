import {configureStore} from "@reduxjs/toolkit";
import TrainSlice from "../Slice/TrainSlice.ts";

export const store =configureStore({
    reducer:{
        trains :TrainSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
