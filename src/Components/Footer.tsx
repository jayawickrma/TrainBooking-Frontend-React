

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-800 text-white py-6">
            <div className="container mx-auto px-4">
                {/* Copyright and Company Info */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm mb-1">© {currentYear} TrainConnect (TRC). All rights Reserved TrainConnect</p>
                        <div className="mt-3">
                            <p className="text-sm">TrainConnect</p>
                            <p className="text-sm">TrainConnect Headquarters,</p>
                            <p className="text-sm">Chicago 10, USA</p>
                            <p className="text-sm">Telephones: +1 800 555 7000</p>
                        </div>
                    </div>

                    {/* Partner Logos and App Download */}
                    <div className="flex flex-col items-end">
                        <div className="flex items-center mb-4">
                            <span className="text-sm mr-2">Technology partner</span>
                            <img src="../assets/img_5.png" alt="Technology Partner Logo" className="h-6" />
                            <img src="/api/placeholder/40/40" alt="Official Logo 1" className="h-10 ml-2" />
                            <img src="/api/placeholder/40/40" alt="Official Logo 2" className="h-10 ml-2" />
                        </div>

                        <div className="flex space-x-2">
                            <a href="#" className="block">
                                <img src="/api/placeholder/140/42" alt="Download on the App Store" className="h-10" />
                            </a>
                            <a href="#" className="block">
                                <img src="/api/placeholder/140/42" alt="Get it on Google Play" className="h-10" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-start border-t border-slate-700 pt-4">
                    <a href="#" className="text-sm mr-8 mb-2 hover:text-blue-300">FAQ</a>
                    <a href="#" className="text-sm mr-8 mb-2 hover:text-blue-300">About us</a>
                    <a href="#" className="text-sm mr-8 mb-2 hover:text-blue-300">Privacy policy</a>
                    <a href="#" className="text-sm mr-8 mb-2 hover:text-blue-300">Train timetable</a>
                    <a href="#" className="text-sm mr-8 mb-2 hover:text-blue-300">Ticket printing locations</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;