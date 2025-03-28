import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { AdminLayout } from "./AdminPannel/Components/AdminLayoutComponent";

// Import all your page components
import { Content } from "./Page/Content";
import { Gallery } from "./Page/Gallery";
import { Booking } from "./Page/Booking";
import { Contact } from "./Page/Contact";
import { Services } from "./Page/Services";
import { TermsConditions } from "./Page/Terms&Conditons";
import LoginComponent from "./Components/LoginComponent";

// Import Admin Panel Components
import { DashBoardComponent } from "./AdminPannel/Components/DashBoardContent";
import { AdminBookingPanel } from "./AdminPannel/Components/AdminBookingPanel";
import { AdminTrainPanel } from "./AdminPannel/Components/AdminTrainPannel";
import { AdminSchedulePanel } from "./AdminPannel/Components/AdminSchedulePanel";
import { AdminPaymentPanel } from "./AdminPannel/Components/AdminPaymentPannel";

// Layout component for routes with NavBar
const UserLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet /> {/* This will render child routes */}
        </div>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                {/* User Routes with NavBar */}
                <Route element={<UserLayout />}>
                    <Route path="/" element={<Content />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/rules" element={<TermsConditions />} />
                    <Route path="/login" element={<LoginComponent />}/>
                    <Route path="/signUp" element={<LoginComponent />}/>
                </Route>

                {/* Admin Routes with Sidebar */}
                <Route element={<AdminLayout />}>
                    <Route path="/adminDashboard" element={<DashBoardComponent />} />
                    <Route path="/adminBooking" element={<AdminBookingPanel />} />
                    <Route path="/adminTrains" element={<AdminTrainPanel />} />
                    <Route path="/adminSchedule" element={<AdminSchedulePanel />} />
                    <Route path="/adminPayment" element={<AdminPaymentPanel />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;