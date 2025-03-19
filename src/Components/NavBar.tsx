import * as React from "react";
import { useNavigate } from "react-router-dom";
import '../CSS/Navbar.css';
import i1 from '../assets/pexels-photo-12781427.jpeg'
import i2 from '../assets/img_5.png'

const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const menuItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Gallery',
            path: '/gallery'
        },
        {
            name: 'Trains & Schedules',
            path: '/services'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
        {
            name: 'Terms & Conditions',
            path: '/rules'
        },
        {
            name: 'Book Now',
            path: '/booking'
        },
    ];

    return (
        <>
            <div className="navbar-container">
                <div className="logo-section">
                    <img src={i1} alt="Sri Lanka Railways" className="railways-logo" />
                    <span className="logo-text">Sri Lanka Railways</span>
                </div>

                <div className="navbar">
                    <ul className="navbar-menu">
                        {menuItems.map((item) => (
                            <li key={item.path}
                                className="navbar-item"
                                onClick={() => navigate(item.path)}
                            >
                                <span className="navbar-textcr">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="partner-section">
                    <span className="technology-partner">Technology Partner</span>
                    <img src={i2} alt="SLT MOBITEL" className="partner-logo" />
                </div>
            </div>

            <div className="auth-bar">
                <span className="account-text">Already have an account?</span>
                <button className="login-btn">Login</button>
                <span className="or-text">or</span>
                <button className="signup-btn">Sign Up</button>
            </div>
        </>
    );
};

export default NavBar;