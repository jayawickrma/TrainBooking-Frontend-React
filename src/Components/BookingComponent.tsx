import { useState } from "react";
import "../CSS/Booking.css";

export function BookingComponent() {
    const [activeTab, setActiveTab] = useState("generalppassenger");
    const [returnTrip, setReturnTrip] = useState(false);

    return (
        <div className="booking-container">
            <div className="booking-layout">
                {/* Left Sidebar */}
                <div className="booking-sidebar">
                    <h1>Book Your Seat</h1>
                    <p>You can book both ways</p>
                </div>

                {/* Right Side - Booking Form */}
                <div className="booking-form-container">
                    {/* Tab Navigation */}
                    <div className="booking-tabs">
                        {[
                            { id: "generalppassenger", name: "General Passenger" },
                            { id: "warrantpassenger", name: "Warrant Passenger" },
                            { id: "pensionwarrantpassenger", name: "Pension Warrant Passenger" }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                className={`${activeTab === tab.id ? "active-tab" : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Booking Form */}
                    <div className="booking-form">
                        <form>
                            {/* From - To - Date */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Select Train</label>
                                    <select>
                                        <option>Choose Train</option>
                                        <option>Yal Devi | යාල් දේවී</option>
                                        <option>Udarata Menike | උඩරට මැණිකේ</option>
                                        <option>Uttara Devi | උත්තර දේවී</option>
                                        <option>Rajarata Rajini | රජරට රැජිණි</option>
                                        <option>Ruhunu Kumari | රුහුණු කුමාරි</option>
                                        <option>Galu Kumari | ගාලු කුමාරි</option>
                                        <option>Sagarika | සාගරිකා</option>
                                        <option>Badulla Night Express | බදුල්ල රාත්‍රී ශීඝ්‍රගාමී දුම්රිය</option>
                                        <option>Samudra Devi | සමුද්‍ර දේවී</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Time</label>
                                    <select>
                                        <option>Choose Time</option>
                                        <option>Colombo</option>
                                        <option>Kandy</option>
                                        <option>Galle</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>From</label>
                                    <select>
                                        <option>Choose Station</option>
                                        <option>Colombo</option>
                                        <option>Kandy</option>
                                        <option>Galle</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>To</label>
                                    <select>
                                        <option>Choose Station</option>
                                        <option>Jaffna</option>
                                        <option>Badulla</option>
                                        <option>Anuradhapura</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" />
                                </div>
                            </div>

                            {/* Passenger Class */}
                            <div className="form-group">
                                <label>Passenger Class</label>
                                <select>
                                    <option>Choose Class</option>
                                    <option>First Class</option>
                                    <option>Second Class</option>
                                    <option>Third Class</option>
                                </select>
                            </div> <br /> <br />

                            {/* Number of Passengers & Return Toggle */}
                            <div className="passenger-row">
                                <div className="form-group">
                                    <label>No of Passengers</label>
                                    <input type="number" min="1" />
                                </div>
                                <div className="toggle-container">
                                    <label className="toggle-label">
                                        <input
                                            type="checkbox"
                                            className="toggle-checkbox"
                                            checked={returnTrip}
                                            onChange={() => setReturnTrip(!returnTrip)}
                                        />
                                        <span>Return</span>
                                    </label>
                                </div>
                            </div> <br /> <br />

                            {/* reCAPTCHA */}
                            <div className="recaptcha-box">
                                <div className="recaptcha-inner">
                                    <input type="checkbox" />
                                    <span>I'm not a robot</span>
                                    <div className="recaptcha-logo">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64">
                                            <path
                                                d="M64 32c0-17.673-14.327-32-32-32S0 14.327 0 32c0 8.284 3.164 15.818 8.331 21.494"
                                                fill="none" stroke="#ccc" strokeWidth="2" />
                                        </svg>
                                        <div className="recaptcha-terms">reCAPTCHA</div>
                                        <div className="recaptcha-terms">Privacy - Terms</div>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="form-buttons">
                                <button type="reset" className="reset-button">Reset</button>
                                <button type="submit" className="search-button">Search</button>
                                <button type="button" className="confirm-button">Confirm Booking</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingComponent;