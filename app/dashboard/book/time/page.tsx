'use client'

import * as React from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import {Suspense, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import CustomDatePicker from "@/components/dashboard/book/time/CustomDatePicker";
import axios from "axios";
export default function Time() {
    const router = useRouter();
    const [selected, setSelected] = useState<Date>();
    const [takenSpots, setTakenTime] = useState([]);
    const [queryParams, setQueryParams] = useState({});
    const handleButtonClick = (url) => {
        router.push(url); // 替换成你要导航的目标页面路径
    };

    const handleDateSelect = async (date) => {
        setSelected(date);
        try {
            const response = await axios.get('/api/get-available-times', { params: { date } });
            setTakenTime(response.data);
        } catch (error) {
            console.error("Error fetching available times:", error);
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const query = Object.fromEntries(urlParams.entries());
        setQueryParams(query);
    }, []);

    return (
        <>
            <div className={"flex flex-col justify-between"}>
                <h1>
                    Time
                </h1>
                <br/>

                <div>
                    <Button
                        className={"px-2 py-2 w-20"}
                        variant="link"
                        onClick={() => handleButtonClick('/dashboard/book')}>
                        <ChevronLeft/>
                        Back
                    </Button>
                </div>

                <br/>
                <Suspense fallback={"loading"}>
                    <CustomDatePicker
                    selected={selected}
                    handleDateSelect={handleDateSelect}
                    takenSpots={takenSpots}
                    duration={queryParams.duration}
                    />
                </Suspense>

                <br/>

                <Button
                    className={"px-2 py-2 w-20"}
                    variant="outline"
                    onClick={() => handleButtonClick('/dashboard/book/time/info')}>
                    Next
                </Button>

            </div>
        </>
    )
}