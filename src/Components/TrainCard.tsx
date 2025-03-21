import React from "react";
import { TrainModel } from "../Model/TrainModel";
import '../CSS/TrainCard.css' // Import external stylesheet

interface TrainCardProps {
    train: TrainModel;
}

const TrainCard: React.FC<TrainCardProps> = ({ train }) => {
    return (
        <div className="train-card">
            {/* Image Container - Fixed Size */}
            <div className="train-card-image">
                <img src={train.trainImage} alt={train.trainName} />
            </div>

            {/* Train Details */}
            <div className="train-card-details">
                <h3>{train.trainName}</h3>
                <p><span>Route:</span> {train.route}</p>
                <p><span>Capacity:</span> {train.capacity}</p>
            </div>
        </div>
    );
};

export default TrainCard;
