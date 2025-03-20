import { useEffect } from "react";
import { getAllTrains } from "../Slice/TrainSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/Store";
import TrainCard from "../Components/TrainCard";
import TrainModel from "../Model/TrainModel.ts";

export function Services() {
    const dispatch = useDispatch<AppDispatch>();
    const train: TrainModel[] = useSelector((state: RootState) => state.trains);

    useEffect(() => {
        if (train.length === 0) {
            dispatch(getAllTrains());
        }
    }, [dispatch, train]);

    return (
        <>
            <h1>Trains</h1>
            <div className="grid grid-cols-4 gap-5 p-5">
                {train.map((train) => (
                    <TrainCard key={train.trainId} train={train} /> // Pass a single `train` object
                ))}
            </div>
        </>
    );
}