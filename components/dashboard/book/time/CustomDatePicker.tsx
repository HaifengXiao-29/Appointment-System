'use client'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {useState} from "react";

export default function CustomDatePicker() {
    const [selected, setSelected] = useState<Date>();

    return(
        <>
            <div className={"flex flex-col gap-4"}>
                <DayPicker mode="single" selected={selected} onSelect={setSelected} />
                <h1>Available List</h1>

            </div>

        </>

    );
}