import React, { useState, useEffect } from "react";
import { Input, Checkbox, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/Store.ts";
import { login, register } from "../Slice/UserSlice.ts";
import { User } from "../Model/UserModel.ts";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "../CSS/loginPage.css";

// Enum to match backend Role
enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const userRole = useSelector((state: RootState) => state.user.role);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: Role.USER, // Default role
        remember: false,
    });

    useEffect(() => {
        if (isAuthenticated) {
            // Navigate based on user role
            if (userRole === Role.ADMIN) {
                navigate("/adminDashboard");
            } else if (userRole === Role.USER) {
                navigate("/");
            }
        }
    }, [isAuthenticated, userRole, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            message.error("Please fill in all fields.");
            return;
        }

        try {
            // Create User with role
            const user = new User(
                formData.email,
                formData.password,
                formData.role
            );

            if (isSignUp) {
                const result = await dispatch(register(user)).unwrap();
                if (result) {
                    Swal.fire({
                        title: "Successfully Created Account",
                        text: "Registration successful! Redirecting to login.",
                        icon: "success",
                        confirmButtonText: "OK"
                    });
                    setIsSignUp(false); // Switch back to login form
                }
            } else {
                const result = await dispatch(login(user)).unwrap();
                if (result) {
                    Swal.fire({
                        title: "Sign In Successful!",
                        text: "You have successfully signed in.",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(() => {
                        // Conditional navigation based on role
                        if (userRole === Role.ADMIN) {
                            navigate("/adminDashboard");
                        } else if (userRole === Role.USER) {
                            navigate("/");
                        }
                    });
                }
            }
        } catch (error) {
            message.error("An error occurred during authentication. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="app">
            <div className="split-container">
                <div className="left-side">
                    {/* Add your image here */}
                </div>

                <div className="right-side">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass-card"
                    >
                        <div className="form-header">
                            <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
                            <p>
                                {isSignUp
                                    ? "Start your journey with us today"
                                    : "Please enter your details to sign in"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-black">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="input-field"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-black">
                                    Password
                                </label>
                                <Input.Password
                                    id="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="input-field"
                                />
                            </div>

                            {isSignUp && (
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-black">
                                        Select Role
                                    </label>
                                    <select
                                        value={formData.role}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            role: e.target.value as Role
                                        })}
                                        className="w-full p-2 border rounded"
                                    >
                                        <option value={Role.USER}>User</option>
                                        <option value={Role.ADMIN}>Admin</option>
                                    </select>
                                </div>
                            )}

                            {!isSignUp && (
                                <div className="flex items-center justify-between text-black">
                                    <Checkbox
                                        id="remember"
                                        checked={formData.remember}
                                        onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                                        className="text-black"
                                    >
                                        Remember me
                                    </Checkbox>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="submit-button"
                            >
                                {isSignUp ? "Create Account" : "Sign In"}
                            </motion.button>
                        </form>

                        <div className="toggle-text">
                            {isSignUp ? (
                                <p>
                                    Already have an account?{" "}
                                    <span onClick={() => setIsSignUp(false)}>Sign In</span>
                                </p>
                            ) : (
                                <p>
                                    Don't have an account?{" "}
                                    <span onClick={() => setIsSignUp(true)}>Sign Up</span>
                                </p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Login;