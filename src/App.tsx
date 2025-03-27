import './App.css'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import { Content } from "./Page/Content.tsx";
import NavBar from "./Components/NavBar.tsx";
import { Gallery } from "./Page/Gallery.tsx";
import { Booking } from "./Page/Booking.tsx";
import { Contact } from "./Page/Contact.tsx";
import { Services } from "./Page/Services.tsx";
import { TermsConditions } from "./Page/Terms&Conditons.tsx";
import LoginComponent from "./Components/LoginComponent.tsx";
import {AdminBookingPanel} from "./AdminPannel/Components/AdminBookingPanel.tsx";
import {AdminTrainPanel} from "./AdminPannel/Components/AdminTrainPannel.tsx";
import {AdminSchedulePanel} from "./AdminPannel/Components/AdminSchedulePanel.tsx";
import {AdminPaymentPanel} from "./AdminPannel/Components/AdminPaymentPannel.tsx";
import DashBoardComponent from "./AdminPannel/Components/DashBoardComponent.tsx";


function App() {
    return (
        <>

            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/rules" element={<TermsConditions />} />
                    <Route path="/login" element={<LoginComponent />}/>
                    <Route path="/signUp" element={<LoginComponent/> }/>
                    <Route path="/adminDashboard" element={<DashBoardComponent/> }/>
                    <Route path="/adminBooking" element={<AdminBookingPanel/> }/>
                    <Route path="/adminTrains" element={<AdminTrainPanel/> }/>
                    <Route path="/adminSchedule" element={<AdminSchedulePanel/> }/>
                    <Route path="/adminPayment" element={<AdminPaymentPanel/> }/>
                </Routes>
            </Router>
        </>
    )
}

export default App