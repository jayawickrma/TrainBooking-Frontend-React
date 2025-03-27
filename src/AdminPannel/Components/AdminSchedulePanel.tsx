import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    getAllSchedules,
} from '../../Slice/ScheduleSlice'; // Adjust import path as needed
import ScheduleComponent from "../../Components/ScheduleComponent.tsx"; // Adjust import path as needed

export function AdminSchedulePanel() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllSchedules());
    }, [dispatch]);

    return (
        <div className="schedule-container">
                <ScheduleComponent/>
        </div>
    );
}