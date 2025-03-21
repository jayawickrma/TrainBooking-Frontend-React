import "../CSS/Contact.css"

const ContactForm = () => {
    return (
        <div className="contact-container">
            <div className="inner-container">
                <div className="form-header">
                    <h2 className="form-title">Contact Us</h2>
                    <p className="form-subtitle">We'd love to hear from you. Please fill out the form below.</p>
                </div>

                <div className="form-card">
                    <div className="form-body">
                        <div className="success-message">
                            <p>Thank you for your message! We will get back to you soon.</p>
                        </div>

                        <form>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        Name <span className="required-asterisk">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Email <span className="required-asterisk">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">
                                    Subject <span className="required-asterisk">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    Message <span className="required-asterisk">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    required
                                ></textarea>
                            </div>

                            <div className="button-container">
                                <button
                                    type="submit"
                                    className="submit-button"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="contact-info-section">
                        <div className="contact-info-container">
                            <div className="contact-info-header">
                                <h3 className="contact-info-title">Contact Information</h3>
                                <p className="contact-info-text">If you prefer, you can contact us directly:</p>
                            </div>
                            <div>
                                <p className="contact-info-text"><span className="contact-detail">Phone:</span> +94 11 4
                                    600 111</p>
                                <p className="contact-info-text"><span
                                    className="contact-detail">Email:</span> info@railway.gov.lk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;