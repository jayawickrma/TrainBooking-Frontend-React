import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Services/api";
import {ScheduleModel} from "../Model/ScheduleModel.ts";

const initialState = {
    schedule: [] as ScheduleModel[]
}

export const getAllSchedules = createAsyncThunk(
    'schedule/getAllSchedules',
    async () => {
        try {
            const resp = await api.get("/schedule");
            console.log(resp);
            return resp.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
)

const ScheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllSchedules.fulfilled, (state, action) => {
                state.schedule = action.payload || [];
            })
            .addCase(getAllSchedules.pending, () => {
                console.log("Pending get All Schedules...");
            })
            .addCase(getAllSchedules.rejected, (state, action) => {
                console.error("Rejected get All Schedules", action.error);
                state.schedule = []; // Clear schedule on error
            });
    }
});

export default ScheduleSlice.reducer;