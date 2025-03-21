import "../CSS/footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#333639] text-white py-6">
            <div className="container mx-auto px-6">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    {/* Company Info - Left Side */}
                    <div className="mb-6 md:mb-0">
                        <p className="text-sm mb-3">© {currentYear} Sri Lanka Railways (SLR). All rights Reserved Sri Lanka Railways</p>
                        <div className="mt-2 text-sm leading-relaxed">
                            <p>Sri Lanka Railways</p>
                            <p>Sri Lanka Railways Headquarters,</p>
                            <p>Colombo 10, Sri Lanka</p>
                            <p>Telephones : +94 11 4 600 111</p>
                        </div>
                    </div>

                    {/* Partner Logos and App Download - Right Side */}
                    <div className="flex flex-col">
                        {/* Technology Partner */}
                        <div className="flex items-center mb-6 justify-end">
                            <span className="text-sm text-gray-400 mr-2">Technology partner</span>
                            {/* Actual SLT Mobitel logo would go here */}
                            <div className="bg-black px-3 py-1 flex items-center rounded">
                                <span className="text-green-500 font-bold mr-1">SLT</span>
                                <span className="text-green-500 font-bold">MOBITEL</span>
                            </div>
                            {/* Government logos */}
                            <img src="/api/placeholder/40/40" alt="Government Logo 1" className="h-10 ml-2" />
                            <img src="/api/placeholder/40/40" alt="Government Logo 2" className="h-10 ml-2" />
                        </div>

                        {/* App download buttons */}
                        <div className="flex space-x-3 justify-end">
                            {/* App Store button */}
                            <a href="#" className="block w-32">
                                <div className="bg-black rounded-lg flex items-center justify-center py-1 px-3">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs text-gray-300">Download on the</span>
                                        <span className="text-white font-semibold">App Store</span>
                                    </div>
                                </div>
                            </a>

                            {/* Google Play button */}
                            <a href="#" className="block w-32">
                                <div className="bg-black rounded-lg flex items-center justify-center py-1 px-3">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs text-gray-300">GET IT ON</span>
                                        <span className="text-white font-semibold">Google Play</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap border-t border-gray-700 pt-4">
                    <a href="#" className="text-sm mr-10 mb-2 hover:text-gray-300">FAQ</a>
                    <a href="#" className="text-sm mr-10 mb-2 hover:text-gray-300">About us</a>
                    <a href="#" className="text-sm mr-10 mb-2 hover:text-gray-300">Privacy policy</a>
                    <a href="#" className="text-sm mr-10 mb-2 hover:text-gray-300">Train timetable</a>
                    <a href="#" className="text-sm mr-10 mb-2 hover:text-gray-300">Ticket printing locations</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;