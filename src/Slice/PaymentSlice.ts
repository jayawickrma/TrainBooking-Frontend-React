import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Services/api";

export interface PaymentModel {
    paymentId: string;
    paymentDate: string;
    amount: string;
    paymentStatus: string;
    bookingId: string;
}

interface PaymentState {
    payments: PaymentModel[];
    loading: boolean;
    error: string | null;
    currentPayment: PaymentModel | null;
}

const initialState: PaymentState = {
    payments: [],
    loading: false,
    error: null,
    currentPayment: null
};

// Async Thunks
export const fetchAllPayments = createAsyncThunk(
    'payment/fetchAllPayments',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/payments");
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch payments");
        }
    }
);

export const createPayment = createAsyncThunk(
    'payment/createPayment',
    async (paymentData: Omit<PaymentModel, 'paymentId'>, { rejectWithValue }) => {
        try {
            const response = await api.post("/payments", paymentData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Failed to create payment");
        }
    }
);

export const updatePayment = createAsyncThunk(
    'payment/updatePayment',
    async ({ paymentId, paymentData }: { paymentId: string, paymentData: Partial<PaymentModel> }, { rejectWithValue }) => {
        try {
            const response = await api.put(`/payments/${paymentId}`, paymentData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Failed to update payment");
        }
    }
);

export const deletePayment = createAsyncThunk(
    'payment/deletePayment',
    async (paymentId: string, { rejectWithValue }) => {
        try {
            await api.delete(`/payments/${paymentId}`);
            return paymentId;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Failed to delete payment");
        }
    }
);

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        setCurrentPayment: (state, action) => {
            state.currentPayment = action.payload;
        },
        clearCurrentPayment: (state) => {
            state.currentPayment = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch All Payments
            .addCase(fetchAllPayments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllPayments.fulfilled, (state, action) => {
                state.loading = false;
                state.payments = action.payload;
            })
            .addCase(fetchAllPayments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Create Payment
            .addCase(createPayment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.loading = false;
                state.payments.push(action.payload);
            })
            .addCase(createPayment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Update Payment
            .addCase(updatePayment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatePayment.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.payments.findIndex(
                    p => p.paymentId === action.payload.paymentId
                );
                if (index !== -1) {
                    state.payments[index] = action.payload;
                }
                if (state.currentPayment?.paymentId === action.payload.paymentId) {
                    state.currentPayment = action.payload;
                }
            })
            .addCase(updatePayment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Delete Payment
            .addCase(deletePayment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deletePayment.fulfilled, (state, action) => {
                state.loading = false;
                state.payments = state.payments.filter(
                    payment => payment.paymentId !== action.payload
                );
                if (state.currentPayment?.paymentId === action.payload) {
                    state.currentPayment = null;
                }
            })
            .addCase(deletePayment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

// Export actions and reducer
export const { setCurrentPayment, clearCurrentPayment } = paymentSlice.actions;
export default paymentSlice.reducer;