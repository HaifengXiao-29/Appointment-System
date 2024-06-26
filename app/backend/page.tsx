"use client"
import React, { useEffect, useState } from 'react';
import {Suspense} from "react";
import SystemCalendar from "@/components/backend/system-calendar";
import EmployeeInfo from "@/components/backend/EmployeeInfo";

export default function backend() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch('/api/get-calendar-events')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);


    const events = [
        { title: 'event 1', start: '2024-06-09T11:00:00', end: '2024-06-09T12:00:00' },
        { title: 'event 3', start: '2024-06-10T14:00:00', end: '2024-06-10T15:00:00' },
    ]
    // @ts-ignore
    return (
        <>


            <div>
                {data ? <p>Latest data: {data.message}</p> : <p>Loading...</p>}
            </div>
            {/*<Suspense fallback={"loading"}>*/}
            {/*    <SystemCalendar events={events}/>*/}
            {/*</Suspense>*/}
            <EmployeeInfo></EmployeeInfo>

            <div>

            </div>
        </>


    )
}
