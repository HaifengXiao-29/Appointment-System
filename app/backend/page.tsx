"use client"
import React, { useEffect, useState } from 'react';
import {Suspense} from "react";
import SystemCalendar from "@/components/backend/system-calendar";
import EmployeeInfo from "@/components/backend/EmployeeInfo";
import ActivityInput from "@/components/backend/ActivityInput";
import { format, isSameDay, isWithinInterval, startOfWeek, endOfWeek } from 'date-fns';
import axios from "axios";
export default function Home() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('day');

    useEffect(() => {
        const events = async () => {
            try {
                const response = await axios.get('/api/get-calendar-events')
                console.log('Fetched data:', response.data);
                setData(response.data);
                console.log('State updated data:', response.data);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };
        events();
    }, []);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };


    const filteredData = data.filter(event => {
        const eventDate = new Date(event.date);
        const today = new Date();
        if (filter === 'day') {
            return isSameDay(eventDate, today);
        } else if (filter === 'week') {
            return isWithinInterval(eventDate, {
                start: startOfWeek(today, { weekStartsOn: 1 }),
                end: endOfWeek(today, { weekStartsOn: 1 })
            });
        }
    });



    const events = [
        { title: 'event 1', start: '2024-06-25T11:00:00', end: '2024-06-25T12:00:00' },
        { title: 'event 3', start: '2024-06-10T14:00:00', end: '2024-06-10T15:00:00' },
    ]
    // @ts-ignore
    return (
        <>


            {/*<div>*/}
            {/*    {data ? <p>Latest data: {data.message}</p> : <p>Loading...</p>}*/}
            {/*</div>*/}
            {/*<Suspense fallback={"loading"}>*/}
            {/*    <SystemCalendar events={data}/>*/}
            {/*</Suspense>*/}

            <div>
                <button onClick={() => handleFilterChange('day')}>Today</button>
                <button onClick={() => handleFilterChange('week')}>This Week</button>
            </div>
            <div>
                {filteredData.length > 0 ? (
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Employee</th>
                            <th>Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredData.map((event, index) => (
                            <tr key={index}>
                                <td>{event.name}</td>
                                <td>{event.startTime}</td>
                                <td>{event.endTime}</td>
                                <td>{event.service}</td>
                                <td>{format(new Date(event.date), 'yyyy-MM-dd')}</td>
                                <td>{event.employee}</td>
                                <td>{event.notes}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No events found</p>
                )}
            </div>



            {/*<EmployeeInfo></EmployeeInfo>*/}

            <br/>

            <h1>Activity update</h1>
            <ActivityInput></ActivityInput>


        </>


    )
}
