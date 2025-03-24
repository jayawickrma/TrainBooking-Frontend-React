import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { getAllSchedules } from "../Slice/ScheduleSlice";
import "../CSS/Schedule.css";

const ScheduleComponent: React.FC = () => {
    const dispatch = useDispatch();
    const schedules = useSelector((state: RootState) => state.schedule.schedule);

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllSchedules());
    }, [dispatch]);

    return (
        <div className="schedule-container">
            <h2>Train Schedules</h2>
            <table className="schedule-table">
                <thead>
                <tr>
                    <th>Schedule No</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Date</th>
                    <th>Train</th>
                </tr>
                </thead>
                <tbody>
                {schedules.map((schedule) => (
                    <tr key={schedule.scheduleId}>
                        <td>{schedule.scheduleId}</td>
                        <td>{schedule.arrivalTime}</td>
                        <td>{schedule.departureTime}</td>
                        <td>{schedule.date}</td>
                        <td>{schedule.trainId}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleComponent;