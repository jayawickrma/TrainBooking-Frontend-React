import { useState, useEffect } from 'react';
import "../CSS/TermsAndCondiotions.css"
const TermsAndConditions = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
    const [fadeIn, setFadeIn] = useState(false);

    // Initialize with all sections expanded
    useEffect(() => {
        // Get all section IDs from the document
        const sectionIds = [
            'section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9',
            'ewarrant1', 'pension1'
        ];

        // Set all sections to expanded by default
        const initialExpandedState: Record<string, boolean> = {};
        sectionIds.forEach(id => {
            initialExpandedState[id] = true;
        });

        setExpandedSections(initialExpandedState);

        // Trigger fade-in animation after component mounts
        setTimeout(() => {
            setFadeIn(true);
        }, 100);
    }, []);

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const changeTab = (tab: string) => {
        setFadeIn(false);
        setTimeout(() => {
            setActiveTab(tab);
            setFadeIn(true);
        }, 300);
    };

    return (
        <div className="terms-container">
            <h1 className="main-title">Terms and Conditions</h1>

            <div className="tab-container">
                <button
                    className={`tab-button ${activeTab === 'general' ? 'active-tab' : ''}`}
                    onClick={() => changeTab('general')}
                >
                    General Terms
                </button>
                <button
                    className={`tab-button ${activeTab === 'ewarrant' ? 'active-tab' : ''}`}
                    onClick={() => changeTab('ewarrant')}
                >
                    E-Warrant Terms
                </button>
                <button
                    className={`tab-button ${activeTab === 'pension' ? 'active-tab' : ''}`}
                    onClick={() => changeTab('pension')}
                >
                    Pension E-Warrant Terms
                </button>
            </div>

            <div className={`content-container ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                {activeTab === 'general' && (
                    <div>
                        <h2 className="terms-heading">GENERAL TERMS AND CONDITIONS APPLICABLE FOR USE OF THE ONLINE SEAT RESERVATION SERVICE OF SRI LANKA RAILWAYS.</h2>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['section1'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('section1')}
                            >
                                <span className="section-number">01.</span> PRIOR TO MAKING A RESERVATION THROUGH THE SERVICE
                                <span className="toggle-icon">{expandedSections['section1'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['section1'] && (
                                <div className="section-content">
                                    <p>YOU ARE STRONGLY ADVISED TO BE VIGILANT OF THE FOLLOWING GUIDELINES AND COMPLY WITH THE SAME:</p>
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
                                        <li>Travelling on any other trains by using these types of tickets are strictly prohibited. An ordinary travelling ticket should be purchased for travelling to a transits station to catch a reserved train.</li>
                                        <li>All tickets issued through the Service are the property of Sri Lanka Railways. Tickets are non-transferable and should be handed over to the destination station before leaving the station after the journey. Sri Lanka Railways officers have the authority to request and check the tickets at any given moment.</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['section2'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('section2')}
                            >
                                <span className="section-number">02.</span> PAYMENT METHODS
                                <span className="toggle-icon">{expandedSections['section2'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['section2'] && (
                                <div className="section-content">
                                    <p>You should use a valid VISA or Master Credit/ Debit card when making online reservations through the internet.</p>

                                    <h3>Debit/Credit Card, Bank Account Details:</h3>
                                    <ul>
                                        <li>You agree that the debit/credit card details provided by you for use of the Sri Lanka Railways online seat reservation service is correct and accurate and you shall not use a Debit/ credit card, that is not lawfully owned by you or the use of which is not authorized by the lawful owner thereof. You further agree and undertake to provide correct and valid debit/credit card details.</li>
                                        <li>You agree, understand and confirm that your personal data including without limitation details relating to debit card/ credit card transmitted over the Internet may be susceptible to misuse, hacking, theft and/ or fraud and the Sri Lanka Railways or your Payment Service Provider(s) have no control over such matters.</li>
                                        <li>The Sri Lanka Railways (including its service providers and suppliers), the Payment Service Provider(s) and its affiliates and associates shall not be liable, at any time, for any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communications line failure, theft or destruction or unauthorized access to, alteration of, or use of information contained on the Website.</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['section3'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('section3')}
                            >
                                <span className="section-number">03.</span> CANCELLATION POLICY
                                <span className="toggle-icon">{expandedSections['section3'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['section3'] && (
                                <div className="section-content">
                                    <ul>
                                        <li>If you wish to cancel the journey, you have to visit the nearest Railway station where the mTicketing service is available together with the E-Tickets issued to you and it is a mandatory requirement to provide your NIC/passport to the counter for verification purpose.</li>
                                        <li>Fill the appropriate application supplied carefully.</li>
                                        <li>Refund percentage will be calculated according to the below table exclusive of service charge.</li>
                                        <li>Cancellation can be done according to the below mentioned time periods prior to relevant train departure.</li>
                                    </ul>

                                    <div className="table-container">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Number hours to the train departure time</th>
                                                <th>Refund percentage (%) from the ticket fee</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>More than 168 hours (7 days +)</td>
                                                <td>75%</td>
                                            </tr>
                                            <tr>
                                                <td>Less than 168 hours but more than 48 hours (2 days &gt; 7 days)</td>
                                                <td>50%</td>
                                            </tr>
                                            <tr>
                                                <td>Less than 48 hours (less than 2 days)</td>
                                                <td>0%</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['section4'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('section4')}
                            >
                                <span className="section-number">04.</span> REFUND POLICY
                                <span className="toggle-icon">{expandedSections['section4'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['section4'] && (
                                <div className="section-content">
                                    <ul>
                                        <li>Refunds will be available only for the particular train (journey) which has been completely unavailable due to an interruption.</li>
                                        <li>Only the ticket fee will be refunded and service charge will not be refunded.</li>
                                        <li>Refunds can be claimed only on mTicketing service available stations (please click here)</li>
                                        <li>To request a ticket refund, the passenger must provide a copy of their National Identity Card or Foreign Passport to verify the corresponding number mentioned on the ticket.</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['section5'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('section5')}
                            >
                                <span className="section-number">05.</span> LIABILITY CLAUSE
                                <span className="toggle-icon">{expandedSections['section5'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['section5'] && (
                                <div className="section-content">
                                    <p>SLR shall not be held liable for any damages; loss or theft of personal luggage and belongings, nor can SLR be held liable for personal injury, accident, illness or death while guests are on an excursion made available by the train.</p>
                                    <p>SLR shall also not be held responsible, when circumstances beyond its control lead to an interruption, early termination, delay or cancellation of any particular trip. Such circumstances shall include, but not be limited to instances of vis major/force majeure and/or casus fortuitus (natural causes such as floods and other natural disasters, fortuitous and unforeseen events, etc.).</p>
                                </div>
                            )}
                        </div>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['section6'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('section6')}
                            >
                                <span className="section-number">06.</span> CHILD POLICY
                                <span className="toggle-icon">{expandedSections['section6'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['section6'] && (
                                <div className="section-content">
                                    <p>Children from the age of 3 (three) years and younger sharing a seat with their parents travel free of charge (maximum of 1 (one)child per adult). Due to space constraints, SLR will not be able to accommodate any additional seat(s) to accommodate the infant / children. Children will have to share the seat with their parents / guardians. Should this pose a problem, SLR recommends that the guests book an additional seat for the children (in which case the children's rate does not apply and the standard adult rate for the seat shall apply). Children from the age of 3 (three) years and older pay full adult rates. SLR does not serve or provide special meals for children and/ or infants or adults. Children should be kept under strict adult supervision by their parents/ guardians and should not inconvenience other guests.</p>
                                </div>
                            )}
                        </div>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['section7'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('section7')}
                            >
                                <span className="section-number">07.</span> DANGEROUS GOODS
                                <span className="toggle-icon">{expandedSections['section7'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['section7'] && (
                                <div className="section-content">
                                    <p>For safety reasons, no guest is allowed to bring dangerous goods such as firearms, flammable substances, and fireworks, poisonous or toxic substances on board.</p>
                                </div>
                            )}
                        </div>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['section8'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('section8')}
                            >
                                <span className="section-number">08.</span> PETS
                                <span className="toggle-icon">{expandedSections['section8'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['section8'] && (
                                <div className="section-content">
                                    <p>No pets are allowed onboard.</p>
                                </div>
                            )}
                        </div>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['section9'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('section9')}
                            >
                                <span className="section-number">09.</span> LUGGAGE
                                <span className="toggle-icon">{expandedSections['section9'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['section9'] && (
                                <div className="section-content">
                                    <p>Each adult passenger will be allowed, to bring on board their luggage, free of charge as per SLR's general regulation. (Refer to general commercial rules set out below. For any enquiries meet a railway office.) The commuters will have to store luggage in the Luggage cabin by themselves. Luggage/baggage stored in the Luggage cabin is subject to availability. SLR would not provide additional space to accommodate their luggage. Heavy luggage is exclusively prohibited as little space available for commuters to store their luggage.</p>
                                    <p>As per general commercial rules of SLR, followings are the limitations applicable on free luggage based on the type of ticket.</p>
                                    <ul>
                                        <li>First Class tickets holder: 40 Kg.</li>
                                        <li>Second Class tickets holder: 35 Kg.</li>
                                        <li>Third Class tickets holder: 25 Kg.</li>
                                    </ul>
                                    <p>Passengers are strictly recommended to ensure that their luggage is(are) securely locked. SLR is not responsible for any stolen or lost luggage.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'ewarrant' && (
                    <div>
                        <h2 className="terms-heading">GENERAL TERMS AND CONDITIONS APPLICABLE FOR USE OF THE ONLINE E-WARRANT SEAT RESERVATION SERVICE OF SRI LANKA RAILWAYS.</h2>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['ewarrant1'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('ewarrant1')}
                            >
                                <span className="section-number">01.</span> PRIOR TO MAKING A RESERVATION THROUGH THE SERVICE
                                <span className="toggle-icon">{expandedSections['ewarrant1'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['ewarrant1'] && (
                                <div className="section-content">
                                    <p>YOU ARE STRONGLY ADVISED TO BE VIGILANT OF THE FOLLOWING GUIDELINES AND COMPLY WITH THE SAME:</p>
                                    <ul>
                                        <li>Please note that the reservation you make through the online seat reservation service by using your warrant will only be reserved as a temporary reservation and you need to visit a mTicketing enabled station and produce your physical warrant and temporary reservation confirmation within the stipulated time frame in order to have the temporary reservation confirmed.</li>
                                        <li>You can make a temporary reservation for the warrant through the online seat reservation service provided you have met all the qualification to obtain a warrant document and the government organization of which you are employed shall also be responsible to issue the warrant according to rules and regulations of the Railway Department.</li>
                                        <li>Warrant holder shall be responsible to enter the correct information to the online reservation system and the Department of Railways shall not be responsible for any mistake that warrant holder makes during the data entry process.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'pension' && (
                    <div>
                        <h2 className="terms-heading">GENERAL TERMS AND CONDITIONS APPLICABLE FOR USE OF THE ONLINE PENSION E-WARRANT SEAT RESERVATION SERVICE OF SRI LANKA RAILWAYS.</h2>

                        <div className="section">
                            <h2
                                className={`section-title ${expandedSections['pension1'] ? 'expanded' : ''}`}
                                onClick={() => toggleSection('pension1')}
                            >
                                <span className="section-number">01.</span> PRIOR TO MAKING A RESERVATION THROUGH THE SERVICE
                                <span className="toggle-icon">{expandedSections['pension1'] ? '−' : '+'}</span>
                            </h2>
                            {expandedSections['pension1'] && (
                                <div className="section-content">
                                    <p>YOU ARE STRONGLY ADVISED TO BE VIGILANT OF THE FOLLOWING GUIDELINES AND COMPLY WITH THE SAME:</p>
                                    <ul>
                                        <li>You can avail the online seat reservation service by quoting the trip ID number issued to you by the Divisional Secretariat and providing the relevant details. Please note that this does not guarantee a train reserved seat.</li>
                                        <li>Please note that the ticket you receive for your reservation, whether in soft copy or printed form is valid for the train journey and if necessary, you can also obtain a ticket for that by presenting the reference number received at a train station.</li>
                                        <li>If this system indicates that the trip ID number issued to you by the Divisional Secretariat is incorrect, you must verify its accuracy and the Railways Department is exempted from any liability in this regard.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default TermsAndConditions;