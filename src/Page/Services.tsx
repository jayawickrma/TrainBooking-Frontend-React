import {useEffect} from "react";
import {getAllTrains} from "../Slice/TrainSlice.ts";
import TrainModel from "../Model/TrainModel.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/Store.ts";
import TrainCard from "../Components/TrainCard.tsx";

export function Services(){
    useEffect(()=>{
        if (trainss.length ===0){
            dispatch(getAllTrains());
        }
    }, [])


    const dispatch =useDispatch<AppDispatch>();
    const trainss:TrainModel[] =useSelector((state:RootState)=>state.trains)
    return(
        <>
            <h1>Trains</h1>
            <div  className="grid grid-cols-4 gap-5 p-5">
                {trainss.map((train)=>(
                    <TrainCard key ={train.trainId} train={train}/>
                ))}
            </div>
        </>
    )

}