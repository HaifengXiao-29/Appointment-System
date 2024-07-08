'use client'
import {DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css";

import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {Button} from "@/components/ui/button";
import ErrorAlert from "@/components/unity/ErrorAlert";


export default function CustomDatePicker({selected, handleDateSelect, duration, takenTime, onTimeSelect}) {
    const [timeSlots, setTimeSlots] = useState([]);
    const [showModal, setShowModal] = React.useState({isVisible: false, message: ""});
    const closeModal = () => {
        setShowModal({isVisible: false, message: ""});
    };

    const generateTimeSlots = (start, end) => {
        const slots = [];
        let current = new Date();
        current.setHours(start, 0, 0, 0);
        while (current.getHours() < end) {
            slots.push(current.toTimeString().substring(0, 5));
            current.setMinutes(current.getMinutes() + 30);
        }
        return slots;
    };

    const handlePeriodClick = (start, end) => {
        if (!selected) {
            setShowModal({isVisible: true, message: "Please select a date."});
            return;
        }
        const slots = generateTimeSlots(start, end);
        setTimeSlots(slots);
    };
    const handleTimeSlotClick = async (slot) => {

        try {
            console.log(slot);
            console.log(duration);
            const start = slot;
            const [hours, minutes] = start.split(':').map(Number);
            const durationMinutes = parseInt(duration, 10);
            const endDate = new Date();
            endDate.setHours(hours);
            endDate.setMinutes(minutes + durationMinutes);
            const end = endDate.toTimeString().substring(0, 5);
            console.log(`Start: ${start}, End: ${end}`);

            const response = await axios.get('/api/get-available-times', {
                params: {date: selected, startTime: start, endTime: end}
            });
            takenTime(response.data)
            onTimeSelect(start, end)

        } catch (error) {
            console.error("Error fetching available times:", error);
        }
    };


    return (
        <>
            <div className={"flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-lg mx-auto"}>

                <DayPicker mode="single" selected={selected} onSelect={handleDateSelect}/>

                <div className="relative w-full my-4">
                    <div className="absolute left-1/2 transform -translate-x-1/2" style={{ width: '30%', borderBottom: '2px solid #60a5fa' }}></div>
                </div>

                <div className={"flex flex-row gap-4 mt-4"}>
                    <Button
                        onClick={() => handlePeriodClick(9, 13)}
                        className={"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:bg-blue-700 transition duration-150 text-md"}
                    >
                        Morning
                    </Button>
                    <Button
                        onClick={() => handlePeriodClick(13, 17)}
                        className={"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:bg-blue-700 transition duration-150 text-md"}
                    >
                        Afternoon
                    </Button>
                    <Button
                        onClick={() => handlePeriodClick(17, 21)}
                        className={"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:bg-blue-700 transition duration-150 text-md"}
                    >
                        Evening
                    </Button>
                </div>

                <div className={"grid grid-cols-4 gap-2 mt-4 w-full"}>
                    {timeSlots.length === 0 ? (
                        // Placeholder slots
                        Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="p-2 invisible">
                                00:00
                            </div>
                        ))
                    ) : (
                        // Actual time slots
                        timeSlots.map((slot, index) => (
                            <button
                                key={index}
                                className="p-2 bg-gray-200 rounded hover:bg-gray-300 text-center"
                                onClick={() => handleTimeSlotClick(slot)}
                            >
                                {slot}
                            </button>
                        ))
                    )}
                </div>

                <ErrorAlert showModal={showModal} closeModal={closeModal}/>


            </div>

        </>

    );
}