import {useNavigate} from "react-router-dom";
import dashboard from "../images/dashboard.png"
import payment from "../images/payment.png"
import schedules from "../images/schedule.png"
import trains from "../images/train.png"
import booking from "../images/booking.png"

export function SidebarComponent(){
    const navigate = useNavigate(); // Use React Router navigation

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon:dashboard  },
        { name: 'Bookings', path: '/crop-manage', icon: booking },
        { name: 'Trains', path: '/field-manage', icon: trains },
        { name: 'Schedules', path: '/log-manage', icon: schedules },
        { name: 'Payment', path: '/equipment-manage', icon: payment },

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