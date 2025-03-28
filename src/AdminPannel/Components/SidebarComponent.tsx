import { useNavigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';

// Import icons
import dashboard from "../images/dashboard.png";
import payment from "../images/payment.png";
import schedules from "../images/schedule.png";
import trains from "../images/train.png";
import booking from "../images/booking.png";
import logoutIcon from "../images/img.png";
import "../adminCss/SideBar.css";

export function SidebarComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

    const menuItems = [
        { name: 'Dashboard', path: '/adminDashboard', icon: dashboard },
        { name: 'Bookings', path: '/adminBooking', icon: booking },
        { name: 'Trains', path: '/adminTrains', icon: trains },
        { name: 'Schedules', path: '/adminSchedule', icon: schedules },
        { name: 'Payment', path: '/adminPayment', icon: payment },
    ];

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setSidebarOpen(!mobile);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out from the admin panel',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Logging Out',
                    text: 'You are being logged out...',
                    icon: 'info',
                    timer: 1500,
                    showConfirmButton: false,
                    didClose: () => {
                        navigate('/');
                    }
                });
            }
        });
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-logo">
                    <h2>Train Admin</h2>
                    {isMobile && (
                        <button className="close-sidebar" onClick={toggleSidebar}>
                            &times;
                        </button>
                    )}
                </div>
                <ul className="sidebar-menu">
                    {menuItems.map((item) => (
                        <li
                            key={item.path}
                            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => {
                                navigate(item.path);
                                if (isMobile) setSidebarOpen(false);
                            }}
                        >
                            <img src={item.icon} alt={item.name} className="sidebar-icon" />
                            <span className="sidebar-text">{item.name}</span>
                        </li>
                    ))}
<br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                    {/* Logout Button */}
                    <li
                        className="sidebar-item logout-item"
                        onClick={handleLogout}
                    >
                        <img src={logoutIcon} alt="Logout" className="sidebar-icon" />
                        <span className="sidebar-text">Logout</span>
                    </li>
                </ul>
            </div>

            {/* Overlay for mobile */}
            {isMobile && sidebarOpen && (
                <div className="sidebar-overlay" onClick={toggleSidebar}></div>
            )}
        </>
    );
}