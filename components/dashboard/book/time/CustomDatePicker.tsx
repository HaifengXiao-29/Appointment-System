'use client'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import * as React from "react";

const BUSINESS_START_HOUR = 10;
const BUSINESS_END_HOUR = 22;





export default function CustomDatePicker({selected, handleDateSelect , takenSpots, duration}) {




    return(
        <>
            <div className={"flex flex-col gap-4"}>
                <DayPicker mode="single" selected={selected} onSelect={handleDateSelect } />
                <h1>Available List</h1>

                <div className={"flex flex-row gap-4"}>
                    <button>
                        Morning
                    </button>
                    <button>
                        Afternoon
                    </button>
                    <button>
                        Evening
                    </button>
                </div>


            </div>

        </>

    );
}