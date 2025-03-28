import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Services/api";
import { ScheduleModel } from "../Model/ScheduleModel.ts";

const initialState = {
    schedule: [] as ScheduleModel[],
    loading: false,
    error: null as string | null
}

export const getAllSchedules = createAsyncThunk(
    'schedule/getAllSchedules',
    async (_, { rejectWithValue }) => {
        try {
            const resp = await api.get("/schedule");
            return resp.data;
        } catch (e: any) {
            return rejectWithValue(e.response?.data?.message || "Failed to fetch schedules");
        }
    }
);

export const addSchedule = createAsyncThunk(
    'schedule/addSchedule',
    async (scheduleData: Omit<ScheduleModel, 'scheduleId'>, { rejectWithValue }) => {
        try {
            const resp = await api.post("/schedule", scheduleData);
            return resp.data;
        } catch (e: any) {
            return rejectWithValue(e.response?.data?.message || "Failed to add schedule");
        }
    }
);

export const updateSchedule = createAsyncThunk(
    'schedule/updateSchedule',
    async ({ scheduleId, scheduleData }: { scheduleId: string, scheduleData: Partial<ScheduleModel> }, { rejectWithValue }) => {
        try {
            const resp = await api.put(`/schedule/${scheduleId}`, scheduleData);
            return resp.data;
        } catch (e: any) {
            return rejectWithValue(e.response?.data?.message || "Failed to update schedule");
        }
    }
);

export const deleteSchedule = createAsyncThunk(
    'schedule/deleteSchedule',
    async (scheduleId: string, { rejectWithValue }) => {
        try {
            await api.delete(`/schedule/${scheduleId}`);
            return scheduleId;
        } catch (e: any) {
            return rejectWithValue(e.response?.data?.message || "Failed to delete schedule");
        }
    }
);

const ScheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get All Schedules
            .addCase(getAllSchedules.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllSchedules.fulfilled, (state, action) => {
                state.loading = false;
                state.schedule = action.payload || [];
            })
            .addCase(getAllSchedules.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.schedule = [];
            })

            // Add Schedule
            .addCase(addSchedule.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addSchedule.fulfilled, (state, action) => {
                state.loading = false;
                state.schedule.push(action.payload);
            })
            .addCase(addSchedule.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Update Schedule
            .addCase(updateSchedule.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateSchedule.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.schedule.findIndex(
                    s => s.scheduleId === action.payload.scheduleId
                );
                if (index !== -1) {
                    state.schedule[index] = action.payload;
                }
            })
            .addCase(updateSchedule.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Delete Schedule
            .addCase(deleteSchedule.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteSchedule.fulfilled, (state, action) => {
                state.loading = false;
                state.schedule = state.schedule.filter(
                    s => s.scheduleId !== action.payload
                );
            })
            .addCase(deleteSchedule.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export default ScheduleSlice.reducer;