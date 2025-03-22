import {configureStore} from "@reduxjs/toolkit";
import TrainSlice from "../Slice/TrainSlice.ts";
import UserSlice from "../Slice/UserSlice.ts";

export const store =configureStore({
    reducer:{
        trains :TrainSlice,
        user :UserSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
