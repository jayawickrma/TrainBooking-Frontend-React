import * as React from "react";
import { useNavigate } from "react-router-dom";
import '../CSS/Navbar.css';
import i1 from '../assets/pexels-photo-12781427.jpeg';
import i2 from '../assets/img_5.png';

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const navbarRef = React.useRef<HTMLDivElement>(null);
    const mobileButtonRef = React.useRef<HTMLButtonElement>(null);

    const handleLoginClick = () => {
        navigate("/login"); // Navigate to the login page
    };

    const handleSignupClick = () => {
        navigate("/signup"); // Navigate to the signup page
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(prev => !prev);
    };

    // Handle click outside to close menu
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                showMobileMenu &&
                navbarRef.current &&
                mobileButtonRef.current &&
                !navbarRef.current.contains(event.target as Node) &&
                !mobileButtonRef.current.contains(event.target as Node)
            ) {
                setShowMobileMenu(false);
            }
        };

        // Handle window resize
        const handleResize = () => {
            if (window.innerWidth > 768 && showMobileMenu) {
                setShowMobileMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.addEventListener('resize', handleResize);
        };
    }, [showMobileMenu]);

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
                <div className="logo-section" onClick={() => navigate('/')}>
                    <img src={i1} alt="Sri Lanka Railways" className="railways-logo" />
                    <span className="logo-text">Sri Lanka Railways</span>
                </div>

                <button
                    ref={mobileButtonRef}
                    className="mobile-menu-button"
                    onClick={toggleMobileMenu}
                >
                    ☰
                </button>

                <div ref={navbarRef} className={`navbar ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
                    <ul className="navbar-menu">
                        {menuItems.map((item) => (
                            <li key={item.path}
                                className="navbar-item"
                                onClick={() => {
                                    navigate(item.path);
                                    setShowMobileMenu(false);
                                }}
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
                <button onClick={handleLoginClick} className="login-btn">Login</button>
                <span className="or-text">or</span>
                <button onClick={handleSignupClick} className="signup-btn">Sign Up</button>
            </div>
        </>
    );
};

export default NavBar;