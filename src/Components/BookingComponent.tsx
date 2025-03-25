import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookingModel } from "../Model/BookingModel";
import { saveBooking, getAllBookings } from "../Slice/BookingSlice";
import "../CSS/Booking.css";
import { AppDispatch, RootState } from "../Store/Store";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function BookingComponent() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("");
    const [returnTrip, setReturnTrip] = useState(false);
    const [formData, setFormData] = useState({
        train: "",
        time: "",
        departureStation: "",
        arrivalStation: "",
        travelDate: "",
        passengerClass: "",
        seats: 1,
        userId: "",
    });
    const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    // @ts-ignore
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (!isAuthenticated) {
            Swal.fire({
                title: 'Access Denied',
                text: 'Please sign in first to access the booking page.',
                icon: 'warning',
                confirmButtonText: 'Sign In',
                showCancelButton: true,
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                } else {
                    navigate('/');
                }
            });
        } else {
            dispatch(getAllBookings());
        }
    }, [isAuthenticated, dispatch, navigate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        const updatedErrors = { ...formErrors };
        delete updatedErrors[name];
        setFormErrors(updatedErrors);

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked
            });
        } else if (type === 'number') {
            setFormData({
                ...formData,
                [name]: parseInt(value, 10)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const validateForm = () => {
        const errors: Record<string, string> = {};

        if (!formData.train) errors.train = "Please select a train";
        if (!formData.departureStation) errors.departureStation = "Please select departure station";
        if (!formData.arrivalStation) errors.arrivalStation = "Please select arrival station";
        if (!formData.travelDate) errors.travelDate = "Please select travel date";
        if (!formData.passengerClass) errors.passengerClass = "Please select passenger class";
        if (!formData.time) errors.time = "Please select a time";

        if (formData.departureStation === formData.arrivalStation &&
            formData.departureStation !== "") {
            errors.arrivalStation = "Departure and arrival stations cannot be the same";
        }

        if (!isRecaptchaChecked) errors.recaptcha = "Please verify you're not a robot";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleReset = () => {
        setFormData({
            train: "",
            time: "",
            departureStation: "",
            arrivalStation: "",
            travelDate: "",
            passengerClass: "",
            seats: 1,
            userId: "",
        });
        setIsRecaptchaChecked(false);
        setFormErrors({});
    };

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Searching for trains with criteria:", formData);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                const newBooking = new BookingModel(
                    new Date(),
                    new Date(formData.travelDate),
                    formData.arrivalStation,
                    formData.departureStation,
                    formData.passengerClass,
                    formData.seats,
                    currentUser?.email || "",
                    [formData.train]
                );

                const response = await dispatch(saveBooking(newBooking)).unwrap();
                console.log(response)

                Swal.fire({
                    title: 'Booking Successful!',
                    html: `Your booking reference is: <strong>${newBooking.bookingId}</strong>`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

                handleReset();
            } catch (error: any) {
                Swal.fire({
                    title: 'Booking Failed',
                    text: error.message || 'Unable to complete your booking. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const getErrorMessage = (field: string) => {
        return formErrors[field] ? (
            <span className="error-message">{formErrors[field]}</span>
        ) : null;
    };

    return (
        <div className="booking-container">
            <div className="booking-layout">
                <div className="booking-sidebar">
                    <h1>Book Your Seat</h1>
                    <p>You can book both ways</p>
                </div>

                <div className="booking-form-container">
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
                                type="button"
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className="booking-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Select Train</label>
                                    <select
                                        name="train"
                                        value={formData.train}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Choose Train</option>
                                        <option value="1">Yal Devi | යාල් දේවී</option>
                                        <option value="2">Udarata Menike | උඩරට මැණිකේ</option>
                                        <option value="3">Uttara Devi | උත්තර දේවී</option>
                                        <option value="4">Rajarata Rajini | රජරට රැජිණි</option>
                                        <option value="5">Ruhunu Kumari | රුහුණු කුමාරි</option>
                                        <option value="6">Galu Kumari | ගාලු කුමාරි</option>
                                        <option value="7">Sagarika | සාගරිකා</option>
                                        <option value="8">Badulla Night Express | බදුල්ල රාත්‍රී ශීඝ්‍රගාමී දුම්රිය</option>
                                        <option value="9">Samudra Devi | සමුද්‍ර දේවී</option>
                                    </select>
                                    {getErrorMessage("train")}
                                </div>
                                <div className="form-group">
                                    <label>Time</label>
                                    <select
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Choose Time</option>
                                        <option value="06:00">06:00 AM</option>
                                        <option value="09:00">09:00 AM</option>
                                        <option value="12:00">12:00 PM</option>
                                        <option value="15:00">03:00 PM</option>
                                        <option value="18:00">06:00 PM</option>
                                    </select>
                                    {getErrorMessage("time")}
                                </div>
                                <div className="form-group">
                                    <label>From</label>
                                    <select
                                        name="departureStation"
                                        value={formData.departureStation}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Choose Station</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Galle">Galle</option>
                                        <option value="Jaffna">Jaffna</option>
                                        <option value="Badulla">Badulla</option>
                                        <option value="Anuradhapura">Anuradhapura</option>
                                    </select>
                                    {getErrorMessage("departureStation")}
                                </div>
                                <div className="form-group">
                                    <label>To</label>
                                    <select
                                        name="arrivalStation"
                                        value={formData.arrivalStation}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Choose Station</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Galle">Galle</option>
                                        <option value="Jaffna">Jaffna</option>
                                        <option value="Badulla">Badulla</option>
                                        <option value="Anuradhapura">Anuradhapura</option>
                                    </select>
                                    {getErrorMessage("arrivalStation")}
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        name="travelDate"
                                        value={formData.travelDate}
                                        onChange={handleInputChange}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                    {getErrorMessage("travelDate")}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Passenger Class</label>
                                <select
                                    name="passengerClass"
                                    value={formData.passengerClass}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Choose Class</option>
                                    <option value="First Class">First Class</option>
                                    <option value="Second Class">Second Class</option>
                                    <option value="Third Class">Third Class</option>
                                </select>
                                {getErrorMessage("passengerClass")}
                            </div>

                            <div className="passenger-row">
                                <div className="form-group">
                                    <label>No of Passengers</label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="10"
                                        name="seats"
                                        value={formData.seats}
                                        onChange={handleInputChange}
                                    />
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
                            </div>

                            <div className="recaptcha-box">
                                <div className="recaptcha-inner">
                                    <input
                                        type="checkbox"
                                        checked={isRecaptchaChecked}
                                        onChange={() => setIsRecaptchaChecked(!isRecaptchaChecked)}
                                    />
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
                                {getErrorMessage("recaptcha")}
                            </div>

                            <div className="form-buttons">
                                <button
                                    type="button"
                                    className="reset-button"
                                    onClick={handleReset}
                                >
                                    Reset
                                </button>
                                <button
                                    type="button"
                                    className="search-button"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                                <button
                                    type="submit"
                                    className="confirm-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Processing..." : "Confirm Booking"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingComponent;