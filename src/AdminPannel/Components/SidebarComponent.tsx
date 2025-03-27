import {useNavigate} from "react-router-dom";
import dashboard from "../images/dashboard.png"
import payment from "../images/payment.png"
import schedules from "../images/schedule.png"
import trains from "../images/train.png"
import booking from "../images/booking.png"
import "../adminCss/SideBar.css"
export function SidebarComponent(){
    const navigate = useNavigate(); // Use React Router navigation

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon:dashboard  },
        { name: 'Bookings', path: '/adminBooking', icon: booking },
        { name: 'Trains', path: '/adminTrains', icon: trains },
        { name: 'Schedules', path: '/adminSchedule', icon: schedules },
        { name: 'Payment', path: '/adminPayment', icon: payment },

    ];

    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                {menuItems.map((item) => (
                    <li
                        key={item.path}
                        className="sidebar-item"
                        onClick={() => navigate(item.path)}
                    >
                        <img src={item.icon} alt={item.name} className="sidebar-icon" />
                        <span className="sidebar-text">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}