import TrainCard from "../Components/TrainCard.tsx";
import Footer from "../Components/Footer.tsx";
import { TrainModel } from "../Model/TrainModel";
import yaldewi from "../assets/yaldewi.png";
import udaratamanike from "../assets/udaratamanike.png";
import uttradewi from "../assets/uttrdewi.png";
import raaja from "../assets/rajarata rajini.png";
import ruhunu from "../assets/ruhunukumari.png";
import dalukumari from "../assets/glukumari.png";
import nightmail from "../assets/nightmail.png";
import sagarika from "../assets/sagarika.png";
import samudradewi from "../assets/samudradewi.png";

// Dummy Train Data
const dummyTrains: TrainModel[] = [
    { trainId: "1", trainName: "Yal Devi | යාල් දේවී", route: "Colombo Fort to Kankasanthurai", capacity: "2000", trainImage: yaldewi },
    { trainId: "2", trainName: "Udarata Menike | උඩරට මැණිකේ", route: "Colombo to Badulla", capacity: "2000", trainImage: udaratamanike },
    { trainId: "3", trainName: "Uttara Devi | උත්තර දේවී", route: "Colombo Fort to Kankesanthurai", capacity: "2000", trainImage: uttradewi },
    { trainId: "4", trainName: "Rajarata Rajini | රජරට රැජිණි", route: "Anuradhapura to Beliatta", capacity: "2000", trainImage: raaja },
    { trainId: "5", trainName: "Ruhunu Kumari | රුහුණු කුමාරි", route: "Maradana to Matara", capacity: "2000", trainImage: ruhunu },
    { trainId: "6", trainName: "Galu Kumari | ගාලු කුමාරි", route: "Maradana to Beliatta", capacity: "2000", trainImage: dalukumari },
    { trainId: "7", trainName: "Sagarika | සාගරිකා", route: "Maradana to Beliatta", capacity: "2000", trainImage: sagarika },
    { trainId: "8", trainName: "Badulla Night Express | බදුල්ල රාත්‍රී ශීඝ්‍රගාමී දුම්රිය", route: "Colombo Fort to Badulla", capacity: "2000", trainImage: nightmail },
    { trainId: "9", trainName: "Samudra Devi | සමුද්‍ර දේවී", route: "Maradana to Galle", capacity: "2000", trainImage: samudradewi },
];


export function Services() {
    return (

        <> <br/> <br/> <br/> <br/>
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-center text-gray-900 my-6">🚆 Train Services</h1> <br/> <br/> <br/>

            {/* Train Cards Grid */}
            <div className="train-card-container">
                {dummyTrains.map((train) => (
                    <TrainCard key={train.trainId} train={train} />
                ))}
            </div>
            {/* Footer */}
            <Footer />
        </>
    );
}

