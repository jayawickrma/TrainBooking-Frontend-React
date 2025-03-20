import GalleyCOmponent from "../Components/GalleyCOmponent.tsx";
import Footer from "../Components/Footer.tsx";

export function Gallery(){

    return(
        <> <br/> <br/> <br/> <br/>
            <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-white">
                <h2 className="text-4xl font-normal mb-6 text-gray-800">History of Sri Lankan Railways</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="mb-4 text-gray-700">
                            Sri Lanka's railway system has a rich history dating back to 1864 during the British
                            colonial era. The first railway line was constructed to transport coffee from the hill
                            country to Colombo for export. This initial line ran from Colombo to Kandy, spanning 74
                            miles through challenging mountainous terrain.
                        </p>

                        <p className="mb-4 text-gray-700">
                            By the early 20th century, the railway network expanded to serve the tea plantations that
                            had replaced coffee as Sri Lanka's primary export. The iconic Main Line, which climbs from
                            sea level to over 6,200 feet at Pattipola (the highest broad-gauge railway in the world),
                            remains an engineering marvel.
                        </p>

                        <p className="mb-4 text-gray-700">
                            After independence in 1948, the Ceylon Government Railway (later renamed Sri Lanka Railways)
                            continued to develop, with diesel locomotives gradually replacing steam engines by the
                            1970s. Today, Sri Lanka Railways operates on 1,508 kilometers of track, connecting major
                            cities and scenic destinations throughout the island.
                        </p>
                    </div>
                    <GalleyCOmponent />
                    <div>
                        <h3 className="text-2xl font-normal mb-4 text-gray-800">Iconic Railway Journeys</h3>

                        <div className="mb-4">
                            <h4 className="font-medium text-gray-800">Kandy to Ella</h4>
                            <p className="text-gray-700">
                                Considered one of the most beautiful train journeys in the world, this route passes
                                through lush tea plantations, mountain villages, and offers breathtaking views of the
                                central highlands.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h4 className="font-medium text-gray-800">Coastal Line</h4>
                            <p className="text-gray-700">
                                Running from Colombo to Matara along the southwestern coast, this scenic route features
                                stunning ocean views with tracks sometimes running just meters from the water.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h4 className="font-medium text-gray-800">Northern Line</h4>
                            <p className="text-gray-700">
                                Connecting Colombo to Jaffna, this historic line was damaged during the civil conflict
                                but was fully restored in 2014, symbolizing reconnection and recovery.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-normal mb-4 text-gray-800">Cultural Significance</h3>
                    <p className="mb-4 text-gray-700">
                        Trains in Sri Lanka are more than just transportation—they're an integral part of the national
                        identity. The railways have inspired literature, film, and photography, with the blue trains
                        against green tea plantations becoming an iconic image of Sri Lanka.
                    </p>
                    <p className="mb-4 text-gray-700">
                        The observation cars of the hill country trains, with their large windows and open-air sections,
                        were designed specifically to allow passengers to enjoy the spectacular mountain scenery. Today,
                        these journeys attract tourists from around the world seeking to experience Sri Lanka's natural
                        beauty and railway heritage.
                    </p>
                    <p className="text-gray-700">
                        Despite modernization efforts, many aspects of Sri Lanka's railway culture remain charmingly
                        traditional, from the manual signaling systems still in use on some routes to the vendors
                        selling local snacks through train windows at station stops.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}