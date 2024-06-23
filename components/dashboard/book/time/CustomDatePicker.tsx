'use client'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {Button} from "@/components/ui/button";
import ErrorAlert from "@/components/unity/ErrorAlert";





export default function CustomDatePicker({selected, handleDateSelect ,  duration,  takenTime}) {
    const [timeSlots, setTimeSlots] = useState([]);
    const [showModal, setShowModal] =  React.useState({ isVisible: false, message: "" });
    const closeModal = () => {
        setShowModal({ isVisible: false, message: "" });
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
            setShowModal({ isVisible: true, message: "Please select a date." });
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
                params: { date: selected, startTime: start, endTime: end }
            });
            takenTime(response.data)

        } catch (error) {
            console.error("Error fetching available times:", error);
        }
    };


    return(
        <>
            <div className={"flex flex-col gap-4"}>
                <DayPicker mode="single" selected={selected} onSelect={handleDateSelect } />
                <h1>Available List</h1>

                <div className={"flex flex-row gap-4"}>
                    <Button onClick={() => handlePeriodClick(9, 13)}>Morning</Button>
                    <Button onClick={() => handlePeriodClick(13, 17)}>Afternoon</Button>
                    <Button onClick={() => handlePeriodClick(17, 21)}>Evening</Button>
                </div>

                <div className={"flex flex-wrap gap-2 mt-4"}>
                    {timeSlots.map((slot, index) => (
                        <button key={index}
                                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                                onClick={() => handleTimeSlotClick(slot)}
                        >
                            {slot}
                        </button>
                    ))}
                </div>

                <ErrorAlert showModal={showModal} closeModal={closeModal} />


            </div>

        </>

    );
}