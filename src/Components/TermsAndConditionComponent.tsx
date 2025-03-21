import { useState } from "react";
import "../CSS/TermsAndCondiotions.css"; // Import CSS for styling
import { motion } from "framer-motion"; // For animations

const TermsAndConditions = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle sections

    // Function to toggle sections
    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="terms-container">
            <h1>Terms & Conditions</h1>
            <p>
                GENERAL TERMS AND CONDITIONS APPLICABLE FOR USE OF THE ONLINE SEAT RESERVATION SERVICE OF SRI LANKA RAILWAYS.
            </p>

            {/* Section 1: General Guidelines */}
            <motion.div
                className="section"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 onClick={toggleSection}>01. General Guidelines</h2>
                {isOpen && (
                    <ul>
                        <li>Select the correct train for your journey.</li>
                        <li>Fix a convenient date for both up & down journeys.</li>
                        <li>Ensure that you have a thorough understanding of the rates applicable.</li>
                        <li>Maximum of 5 seats could be reserved at once.</li>
                        <li>Standard customer verification and other terms and conditions would apply.</li>
                        <li>NIC numbers of each and every passenger except "DEPENDENT" should be furnished.</li>
                        <li>E-Ticket and other details will be sent via email to commuters who make the reservation via website and/or mobile app.</li>
                        <li>A reservation only becomes guaranteed once full payment has been received by Sri Lanka Railways.</li>
                        <li>The reserved tickets could be used only for specified trains.</li>
                        <li>Travelling on any other trains by using these types of tickets are strictly prohibited.</li>
                    </ul>
                )}
            </motion.div>

            {/* Section 2: Payment Methods */}
            <motion.div
                className="section"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 onClick={toggleSection}>02. Payment Methods</h2>
                {isOpen && (
                    <ul>
                        <li>You should use a valid VISA or Master Credit/Debit card when making online reservations through the internet.</li>
                        <li>Debit/Credit Card, Bank Account Details: You agree that the debit/credit card details provided by you for use of the Sri Lanka Railways online seat reservation service is correct and accurate.</li>
                        <li>You agree, understand and confirm that your personal data including without limitation details relating to debit card/credit card transmitted over the Internet may be susceptible to misuse, hacking, theft and/or fraud.</li>
                    </ul>
                )}
            </motion.div>

            {/* Add more sections as needed */}
        </div>
    );
};

export default TermsAndConditions;