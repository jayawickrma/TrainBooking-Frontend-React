import { useEffect } from "react";
import { getAllTrains } from "../Slice/TrainSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/Store";
import TrainCard from "../Components/TrainCard";
import TrainModel from "../Model/TrainModel.ts";
import Footer from "../Components/Footer.tsx";

export function Services() {
    const dispatch = useDispatch<AppDispatch>();
    const trains: TrainModel[] = useSelector((state: RootState) => state.trains.train);

    useEffect(() => {
        if (trains.length === 0) {
            dispatch(getAllTrains());
        }
    }, [dispatch, trains]);

    return (
        <>
            <h1>Trains</h1>
            <div className="grid grid-cols-4 gap-5 p-5">
                {trains.map((train) => (
                    <TrainCard key={train.trainId} train={train} />
                ))}
                <Footer/>
            </div>
        </>
    );
}