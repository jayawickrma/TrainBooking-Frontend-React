import  { useEffect, useState } from "react";
import axios from "axios"; // For API calls
import { ScheduleModel } from "../Model/ScheduleModel"; // Import the ScheduleModel interface
import "../CSS/Schedule.css"

const ScheduleComponent = () => {
    const [schedules, setSchedules] = useState<ScheduleModel[]>([]); // State to store schedule data

    // Fetch schedule data from the backend
    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get<ScheduleModel[]>("http://localhost:8080/trainBooking/api/trainBooking/schedule"); // Replace with your API endpoint
                setSchedules(response.data); // Set the fetched data to state
            } catch (error) {
                console.error("Error fetching schedules:", error);
            }
        };

        fetchSchedules();
    }, []);

    return (
        <div className="schedule-container">
            <h2>Train Schedules</h2>
            <table className="schedule-table">
                <thead>
                <tr>
                    <th>Schedule ID</th>
                    <th>Train</th>
                    <th>Date</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                </tr>
                </thead>
                <tbody>
                {schedules.map((schedule) => (
                    <tr key={schedule.scheduleId}>
                        <td>{schedule.scheduleId}</td>
                        <td>{schedule.train}</td>
                        <td>{schedule.date}</td>
                        <td>{schedule.departureTime}</td>
                        <td>{schedule.arrivalTime}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleComponent;