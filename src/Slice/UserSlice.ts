import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Services/api.ts";
import { User } from "../Model/UserModel.ts";

// Enum for consistent role handling
export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

// Initial state updated to include role
const initialState: {
    user: User | null;
    token: string | null;
    refresh_token: string | null;
    username: string | null;
    role: Role | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string;
} = {
    user: null,
    token: null,
    refresh_token: null,
    username: null,
    role: null,
    isAuthenticated: false,
    loading: false,
    error: "",
};

// Thunks remain similar to previous implementation
export const register = createAsyncThunk(
    "auth/signUp",
    async (user: User) => {
        try {
            const response = await api.post("auth/signUp", user, { withCredentials: true });
            return response.data;
        } catch (e) {
            throw e;
        }
    }
);

export const login = createAsyncThunk(
    "auth/signIn",
    async (user: User) => {
        try {
            const response = await api.post("auth/signIn", user, { withCredentials: true });
            return response.data;
        } catch (e) {
            throw e;
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.role = null;
            localStorage.removeItem("jwt_token");
            localStorage.removeItem("refresh_token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                if (action.payload) {
                    state.user = action.payload;
                    state.isAuthenticated = true;
                    state.role = action.payload.role || Role.USER;
                    state.error = "";
                }
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload) {
                    state.user = action.payload.user;
                    state.token = action.payload.tokens;
                    state.username = action.payload.username;
                    state.role = action.payload.user?.role || action.payload.role || Role.USER;
                    state.isAuthenticated = true;
                    state.error = "";
                }
            })
        // ... other cases remain the same
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;