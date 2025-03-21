import ImageCarousel from "../Components/ImageCoursel.tsx";
import GalleryComponent from "../Components/GalleyCOmponent.tsx";
import Footer from "../Components/Footer.tsx";
import '../CSS/History.css'
import ScheduleComponent from "../Components/ScheduleComponent.tsx";
import TermsAndConditions from "../Components/TermsAndConditionComponent.tsx";
import ContactForm from "../Components/Contact.tsx";

export function Content(){
        return(
            <>
                    <ImageCarousel/> <br/>
                    <div className="container mx-auto px-4 py-8 bg-white">
                            {/* Title Section */}
                            <div className="mb-6">
                                    <div className="flex border-b border-slate-300">
                                            <h2 className="px-4 py-2 text-lg font-bold text-blue-600 border-b-2 border-blue-600 animate-fade-in">
                                                    Sri Lanka Railway Heritage
                                            </h2>
                                    </div>
                            </div>

                            {/* Content Section */}
                            <div className="md:flex">
                                    {/* History Section */}
                                    <div className="md:w-1/2 pr-4 mb-6 md:mb-0 animate-slide-in-left">
                                            <div>
                                                    <h3 className="text-xl font-bold mb-4 text-gray-800">The Rich
                                                            History of Sri Lanka Railways</h3>
                                                    <p className="text-sm text-gray-600 mb-3">
                                                            Established in 1864 during the British colonial era, Sri
                                                            Lanka Railways (formerly Ceylon Government Railways) began
                                                            with the construction of the Main Line from Colombo to
                                                            Ambepussa. This 54-kilometer line marked the beginning of a
                                                            transformative period in the island's transportation
                                                            history.
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                            Today, the railway network spans over 1,500 kilometers,
                                                            connecting major cities, scenic highlands, and coastal
                                                            regions. The iconic blue trains have become a symbol of Sri
                                                            Lanka's heritage, offering not just transportation but some
                                                            of the most scenic railway journeys in the world.
                                                    </p>
                                            </div>
                                    </div>

                                    {/* Stations Section */}
                                    <div
                                        className="md:w-1/2 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-slate-300 pt-6 md:pt-0 md:pl-6 animate-slide-in-right">
                                            <h3 className="text-xl font-bold mb-4 text-gray-800">Iconic Railway Stations
                                                    of Sri Lanka</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                    <div className="mb-3">
                                                            <h4 className="font-semibold text-blue-500">Colombo
                                                                    Fort</h4>
                                                            <p className="text-xs text-gray-600">The main railway hub
                                                                    with colonial architecture.</p>
                                                    </div>
                                                    <div className="mb-3">
                                                            <h4 className="font-semibold text-blue-500">Kandy</h4>
                                                            <p className="text-xs text-gray-600">Gateway to the hill
                                                                    country with mountain views.</p>
                                                    </div>
                                                    <div className="mb-3">
                                                            <h4 className="font-semibold text-blue-500">Nanu Oya</h4>
                                                            <p className="text-xs text-gray-600">Serving the tea country
                                                                    with British colonial charm.</p>
                                                    </div>
                                                    <div className="mb-3">
                                                            <h4 className="font-semibold text-blue-500">Ella</h4>
                                                            <p className="text-xs text-gray-600">Famous for the iconic
                                                                    Nine Arch Bridge nearby.</p>
                                                    </div>
                                                    <div className="mb-3">
                                                            <h4 className="font-semibold text-blue-500">Galle</h4>
                                                            <p className="text-xs text-gray-600">Coastal station near
                                                                    the historic Galle Fort.</p>
                                                    </div>
                                                    <div className="mb-3">
                                                            <h4 className="font-semibold text-blue-500">Badulla</h4>
                                                            <p className="text-xs text-gray-600">Terminus with
                                                                    spectacular mountain scenery.</p>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
 <br/> <br/> <br/>
                            {/* Did You Know Section */}
                            <div className="mt-6 animate-fade-in">
                                    <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                                            <h3 className="text-lg font-bold mb-3 text-gray-800">Did You Know?</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                    <p className="text-sm text-gray-600">
                                                            The Main Line railway from Colombo to Badulla climbs to
                                                            1,898 meters (6,226 ft) at Pattipola, making it one of the
                                                            most scenic and challenging railway engineering feats in the
                                                            world. The line includes 46 tunnels and numerous viaducts as
                                                            it winds through Sri Lanka's central highlands.
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                            The train journey from Kandy to Ella is often ranked among
                                                            the most beautiful train rides in the world. The 7-hour
                                                            journey passes through lush tea plantations, misty
                                                            mountains, and offers breathtaking views that attract
                                                            thousands of tourists each year specifically to experience
                                                            this iconic rail route.
                                                    </p>
                                            </div>
                                    </div>
                            </div>
                    </div> <br/> <br/>
                    <ScheduleComponent/>  <br/> <br/>
                    <GalleryComponent/>
                    <ContactForm/>  <br/> <br/> <br/> <br/>
                    <TermsAndConditions/>
                    <Footer/>
            </>
        )
}