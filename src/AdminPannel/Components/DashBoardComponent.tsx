import { Routes, Route } from 'react-router-dom';
import { SidebarComponent } from "./SidebarComponent";
import { AdminBookingPanel } from "./AdminBookingPanel";
import { AdminTrainPanel } from "./AdminTrainPannel";
import { AdminSchedulePanel } from "./AdminSchedulePanel";
import { AdminPaymentPanel } from "./AdminPaymentPannel";

// Dashboard content components
function Overview() {
    return (
        <div className="admin-overview">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-stats">
                <div className="stat-card">
                    <h3>Total Bookings</h3>
                    <p>120</p>
                </div>
                <div className="stat-card">
                    <h3>Total Trains</h3>
                    <p>25</p>
                </div>
                <div className="stat-card">
                    <h3>Total Revenue</h3>
                    <p>$45,000</p>
                </div>
            </div>
        </div>
    );
}

function DashBoardComponent() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar Component */}
            <SidebarComponent />

            {/* Main Content Area */}
            <div style={{
                flex: 1,
                padding: '20px',
                overflowY: 'auto',
                backgroundColor: '#f4f4f4'
            }}>
                <Routes>
                    <Route path="" element={<Overview />} />
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