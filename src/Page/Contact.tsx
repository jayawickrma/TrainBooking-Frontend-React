import Footer from "../Components/Footer.tsx";
import ContactForm from "../Components/Contact.tsx";

export function Contact() {
    return (
        <div className="container mx-auto px-4"> <br/> <br/>
            <h1 className="text-3xl font-bold text-center my-8">Contact Us</h1>
            <div className="my-12 flex justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6564727051737!2d79.85764507516866!3d6.9315995930682694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591a5e7013f5%3A0x78dae6d63e1f980f!2sSri%20Lanka%20Railway%20Head%20Quarters!5e0!3m2!1sen!2slk!4v1742494983491!5m2!1sen!2slk"
                    width="100%"
                    height="450"
                    style={{border: 0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <ContactForm/>


            <Footer/>
        </div>
    );
}

export default Contact;