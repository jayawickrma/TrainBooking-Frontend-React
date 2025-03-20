import { useState } from "react";
import "../CSS/loginPage.css";

function Login() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="app">
            <div className={`container ${isSignIn ? "" : "active"}`}>
                {/* Sign In Form */}
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        <span>or use your email and password</span>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <a href="#">Forgot Your Password?</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>

                {/* Sign Up Form */}
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>

                {/* Toggle Overlay */}
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Sign in to book your train tickets and manage your account.</p>
                            <button onClick={toggleForm}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>
                                Register to book your train tickets and enjoy exclusive benefits.
                            </p>
                            <button onClick={toggleForm}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login; // Export the component itself, not the result of calling it