import { useNavigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

// Import icons
import dashboard from "../images/dashboard.png";
import payment from "../images/payment.png";
import schedules from "../images/schedule.png";
import trains from "../images/train.png";
import booking from "../images/booking.png";
import logoutIcon from "../images/img.png";
import "../adminCss/SideBar.css"// Make sure to add this icon


export function SidebarComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    // const dispatch = useDispatch();

    const menuItems = [
        { name: 'Dashboard', path: '/adminDashboard', icon: dashboard },
        { name: 'Bookings', path: '/adminBooking', icon: booking },
        { name: 'Trains', path: '/adminTrains', icon: trains },
        { name: 'Schedules', path: '/adminSchedule', icon: schedules },
        { name: 'Payment', path: '/adminPayment', icon: payment },
    ];

    const handleLogout = () => {
        Swal.fire({
            title: 'Logging Out',
            text: 'You are being redirected to the home page',
            icon: 'info',
            showConfirmButton: false,
            timer: 1500,
            didClose: () => {
                // Navigate to home page
                navigate('/');
            }
        });
    };

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <h2>Train Admin</h2>
            </div>
            <ul className="sidebar-menu">
                {menuItems.map((item) => (
                    <li
                        key={item.path}
                        className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <img src={item.icon} alt={item.name} className="sidebar-icon" />
                        <span className="sidebar-text">{item.name}</span>
                    </li>
                ))}

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
    );
}