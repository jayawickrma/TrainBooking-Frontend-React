import React, { useState, useEffect } from "react";
import { Input, Checkbox, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/Store.ts";
import { login, register } from "../Slice/UserSlice.ts";
import { User } from "../Model/UserModel.ts";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // Import SweetAlert2
import "../CSS/loginPage.css"; // Ensure this CSS file is updated

function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/"); // Redirect to home page after authentication
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            message.error("Please fill in all fields.");
            return;
        }

        try {
            const user = new User(formData.email, formData.password,"USER");
            if (isSignUp) {
                const result = await dispatch(register(user)).unwrap();
                if (result) {
                    Swal.fire({
                        title:"Successfully Created Account..",
                        text:"Registration successful! Redirecting to login.",
                        icon:"success",
                        confirmButtonText:"OK"
                    })
                    setIsSignUp(false); // Switch back to login form
                }
            } else {
                const result = await dispatch(login(user)).unwrap();
                if (result) {
                    // Show SweetAlert2 success alert
                    Swal.fire({
                        title: "Sign In Successful!",
                        text: "You have successfully signed in.",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(() => {
                        // Navigate to home page after the alert is closed
                        navigate("/");
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
            {/* Full-Screen Split-Screen Container */}
            <div className="split-container">
                {/* Left Side: Image */}
                <div className="left-side">
                    {/* Add your image here */}
                </div>

                {/* Right Side: Form */}
                <div className="right-side">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass-card"
                    >
                        {/* Form Header */}
                        <div className="form-header">
                            <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
                            <p>
                                {isSignUp
                                    ? "Start your journey with us today"
                                    : "Please enter your details to sign in"}
                            </p>
                        </div>

                        {/* Form */}
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

                            {/* Animated Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="submit-button"
                            >
                                {isSignUp ? "Create Account" : "Sign In"}
                            </motion.button>
                        </form>

                        {/* Toggle Sign In/Sign Up */}
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