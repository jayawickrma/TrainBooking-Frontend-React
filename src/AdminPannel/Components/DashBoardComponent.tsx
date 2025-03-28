import {useNavigate, useLocation, Route, Routes} from 'react-router-dom';
import dashboard from "../images/dashboard.png";
import payment from "../images/payment.png";
import schedules from "../images/schedule.png";
import trains from "../images/train.png";
import booking from "../images/booking.png";
import "../adminCss/SideBar.css";
import {AdminTrainPanel} from "./AdminTrainPannel.tsx";
import {AdminSchedulePanel} from "./AdminSchedulePanel.tsx";
import {AdminPaymentPanel} from "./AdminPaymentPannel.tsx";
import {AdminBookingPanel} from "./AdminBookingPanel.tsx";

export function SidebarComponent() {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', path: '/adminDashboard', icon: dashboard },
        { name: 'Bookings', path: '/adminBooking', icon: booking },
        { name: 'Trains', path: '/adminTrains', icon: trains },
        { name: 'Schedules', path: '/adminSchedule', icon: schedules },
        { name: 'Payment', path: '/adminPayment', icon: payment },
    ];

    return (
        <div className="sidebar fixed left-0 top-0 h-full w-64 bg-gray-800 text-white flex flex-col">
            <ul className="sidebar-menu flex-1 overflow-y-auto">
                {menuItems.map((item) => (
                    <li
                        key={item.path}
                        className={`sidebar-item p-4 cursor-pointer hover:bg-gray-700 transition ${location.pathname === item.path ? 'bg-gray-700' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <img src={item.icon} alt={item.name} className="sidebar-icon inline-block mr-3 w-6 h-6" />
                        <span className="sidebar-text">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DashBoardComponent() {
    return (
        <div className="flex h-screen"> <br/> <br/> <br/>
            {/* Sidebar Component */}
            <SidebarComponent />
            {/* Main Content Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-gray-100 ml-64">
                <Routes>
                    <Route path="/adminDashboard" element={<DashBoardComponent/>} />
                    <Route path="/adminBooking" element={<AdminBookingPanel />} />
                    <Route path="/adminTrains" element={<AdminTrainPanel />} />
                    <Route path="/adminSchedule" element={<AdminSchedulePanel />} />
                    <Route path="/adminPayment" element={<AdminPaymentPanel />} />
                </Routes>
            </div>
        </div>
    );
}

export default DashBoardComponent;
