import axios, { AxiosError } from "axios";
import { Button, notification } from "antd";
import React from "react";

export const api = axios.create({
    baseURL: "http://localhost:8080/trainBooking/api/trainBooking/"
});

api.interceptors.request.use(
    (config) => {
        if (!config.url?.includes("/auth")) {
            // Fix: Use the correct token key from localStorage
            const token = localStorage.getItem("tokens");
            console.log("================================================================"+token)
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest.isRetry) {
            originalRequest.isRetry = true;

            const refreshToken = localStorage.getItem("refresh_token");
            if (refreshToken) {
                try {
                    const response = await api.post(
                        "auth/refresh-token",
                        {},
                        {
                            headers: {
                                Authorization: `Bearer ${refreshToken}`
                            }
                        }
                    );
                    const newAccessToken = response.data.accessToken;
                    localStorage.setItem("jwt_token", newAccessToken);
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                    return api(originalRequest);
                } catch (e) {
                    const refreshError = e as AxiosError;
                    console.error("Token refresh failed:", refreshError);

                    if (!refreshError.response) {
                        console.error("No response from server!");
                        localStorage.removeItem("jwt_token");
                        localStorage.removeItem("refresh_token");
                        showSessionExpiredNotification();
                        return Promise.reject(refreshError);
                    }

                    if (refreshError.response && (refreshError.response.status === 401 || refreshError.response.status === 403)) {
                        localStorage.removeItem("jwt_token");
                        localStorage.removeItem("refresh_token");
                        showSessionExpiredNotification();
                    }

                    return Promise.reject(refreshError);
                }
            } else {
                localStorage.removeItem("jwt_token");
                localStorage.removeItem("refresh_token");
                showSessionExpiredNotification();
            }
        } else if (error.response?.status === 403) {
            // Handle 403 Forbidden errors - user might need to log in again
            console.error("Access forbidden - check user permissions");
            showForbiddenNotification();
        }

        return Promise.reject(error);
    }
);

export const showSessionExpiredNotification = () => {
    const key = "Session Expired";

    notification.error({
        message: "Session Expired",
        description: "Please login to the system.",
        placement: "bottomRight",
        key,
        btn: React.createElement(Button, {
            type: "primary",
            size: "small",
            onClick: () => {
                window.location.href = "/";
            },
            children: "Login",
        }),
        duration: 0,
    });
};

export const showForbiddenNotification = () => {
    const key = "Access Forbidden";

    notification.error({
        message: "Access Forbidden",
        description: "You don't have permission to perform this action. Please login with appropriate credentials.",
        placement: "bottomRight",
        key,
        btn: React.createElement(Button, {
            type: "primary",
            size: "small",
            onClick: () => {
                window.location.href = "/";
            },
            children: "Login",
        }),
        duration: 0,
    });
};