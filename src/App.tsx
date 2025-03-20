import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Content } from "./Page/Content.tsx";
import NavBar from "./Components/NavBar.tsx";
import { Gallery } from "./Page/Gallery.tsx";
import { Booking } from "./Page/Booking.tsx";
import { Contact } from "./Page/Contact.tsx";
import { Services } from "./Page/Services.tsx";
import { TermsConditions } from "./Page/Terms&Conditons.tsx";
import LoginComponent from "./Components/LoginComponent.tsx";

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
                </Routes>
            </Router>
        </>
    )
}

export default App