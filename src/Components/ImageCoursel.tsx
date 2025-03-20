import  { useState, useEffect } from "react";
import '../CSS/imageCoursel.css'; // Import the updated CSS
import image1 from '../assets/img_4.png';
import image from '../assets/img_2.png';
import image2 from '../assets/img_6.png';

const ImageCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Define the slides with image paths and text
    const slides = [
        {
            image: image,
            title: "Welcome to Sri Lanka Railways",
            description: "Book your train tickets online and enjoy a comfortable journey.",
            buttonText: "Book Now",
        },
        {
            image: image1,
            title: "Explore Scenic Routes",
            description: "Discover the beauty of Sri Lanka with our train services.",
            buttonText: "Learn More",
        },
        {
            image: image2,
            title: "Affordable Travel",
            description: "Travel across the country at the best prices.",
            buttonText: "View Prices",
        },
    ];

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    // Auto-play the carousel
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentSlide]);

    return (
        <div className="carousel-container">
            {/* Map through slides and display the active slide */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${
                        index === currentSlide ? "active" : ""
                    }`}
                >
                    <div className="slide-content">
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                        <div className="slide-text">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <button className="cta-button">{slide.buttonText}</button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <button className="carousel-button prev-button" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="carousel-button next-button" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default ImageCarousel;