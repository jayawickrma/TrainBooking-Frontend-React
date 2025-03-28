
import "../CSS/footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-container">
                {/* Main Content */}
                <div className="footer-main">
                    {/* Company Info - Left Side */}
                    <div className="company-info">
                        <h3 className="company-title">Sri Lanka Railways</h3>
                        <p className="copyright">© {currentYear} Sri Lanka Railways (SLR). All rights Reserved.</p>
                        <div className="address">
                            <p>Sri Lanka Railways</p>
                            <p>Sri Lanka Railways Headquarters,</p>
                            <p>Colombo 10, Sri Lanka</p>
                            <p>Telephones : +94 11 4 600 111</p>
                            <p>Email: info@railway.gov.lk</p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="social-links">
                            <a href="#" className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Middle Section - Quick Links */}
                    <div className="quick-links">
                        <h3 className="links-title">Quick Links</h3>
                        <div className="links-grid">
                            <a href="#" className="link-item">Train Schedule</a>
                            <a href="#" className="link-item">Book Tickets</a>
                            <a href="#" className="link-item">My Bookings</a>
                            <a href="#" className="link-item">PNR Status</a>
                            <a href="#" className="link-item">Train Routes</a>
                            <a href="#" className="link-item">Stations</a>
                            <a href="#" className="link-item">Refund Status</a>
                            <a href="#" className="link-item">Support</a>
                        </div>
                    </div>

                    {/* Partner Logos and App Download - Right Side */}
                    <div className="partner-section">
                        {/* Technology Partner */}
                        <div className="partner-row">
                            <span className="partner-label">Technology partner</span>
                            {/* SLT Mobitel logo */}
                            <div className="partner-logo">
                                <span className="partner-name">SLT</span>
                                <span className="partner-name">MOBITEL</span>
                            </div>
                            {/* Government logos */}
                            <img src="/api/placeholder/40/40" alt="Government Logo 1" className="govt-logo" />
                            <img src="/api/placeholder/40/40" alt="Government Logo 2" className="govt-logo" />
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="newsletter">
                            <h3 className="newsletter-title">Updates & Offers</h3>
                            <div className="newsletter-form">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="newsletter-input"
                                />
                                <button className="newsletter-button">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* App download buttons */}
                        <div className="download-buttons">
                            {/* App Store button */}
                            <a href="#" className="app-button">
                                <div className="app-container">
                                    <div className="app-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                        </svg>
                                    </div>
                                    <div className="app-text">
                                        <span className="app-subtitle">Download on the</span>
                                        <span className="app-title">App Store</span>
                                    </div>
                                </div>
                            </a>

                            {/* Google Play button */}
                            <a href="#" className="app-button">
                                <div className="app-container">
                                    <div className="app-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                            <path d="M3 20.5V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5m4-17.5v17c0 .93.64 1.75 1.58 1.95l10.02 2.17c1.17.25 2.32-.56 2.36-1.75V3.65c.04-1.19-1.11-2-2.28-1.75L8.58 4.08C7.64 4.27 7 5.1 7 6z"/>
                                        </svg>
                                    </div>
                                    <div className="app-text">
                                        <span className="app-subtitle">GET IT ON</span>
                                        <span className="app-title">Google Play</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="footer-nav">
                    <a href="#" className="nav-link">FAQ</a>
                    <a href="#" className="nav-link">About us</a>
                    <a href="#" className="nav-link">Privacy policy</a>
                    <a href="#" className="nav-link">Train timetable</a>
                    <a href="#" className="nav-link">Ticket printing locations</a>
                    <a href="#" className="nav-link">Terms & Conditions</a>
                    <a href="#" className="nav-link">Careers</a>
                    <a href="#" className="nav-link">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;