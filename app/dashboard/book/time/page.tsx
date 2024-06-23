'use client'

import * as React from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import {Suspense, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import CustomDatePicker from "@/components/dashboard/book/time/CustomDatePicker";
import axios from "axios";
import {Toggle} from "@/components/ui/toggle";
export default function Time() {
    const router = useRouter();
    const [selected, setSelected] = useState<Date>();

    const [queryParams, setQueryParams] = useState({});

    const [employees, setEmployees] = useState([]);
    const [takenSpots, setTakenTime] = useState([]);

    const [disabledEmployees, setDisabledEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState("");

    const handleButtonClick = (url) => {
        router.push(url); // 替换成你要导航的目标页面路径
    };

    const handleTakenTime = (data) => {
        setTakenTime(data);
        setDisabledEmployees(data.map(spot => spot.employee));
    };

    const handleDateSelect = async (date) => {
        setSelected(date);
    };

    const handleEmployeeToggle = (employee) => {
        if (employee === selectedEmployee) {
            // If the current selected employee is clicked again, deselect and enable all non-taken employees
            setSelectedEmployee("");
            setDisabledEmployees(takenSpots.map(spot => spot.employee));
        } else {
            // Select the new employee and disable others except taken ones
            setSelectedEmployee(employee);
            setDisabledEmployees([...employees.filter(e => e !== employee && !takenSpots.map(spot => spot.employee).includes(e)), ...takenSpots.map(spot => spot.employee)]);
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const query = Object.fromEntries(urlParams.entries());
        setQueryParams(query);

        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/employees.json');
                setEmployees(response.data.employees);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };
        fetchEmployees();

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
                    duration={queryParams.duration}
                    takenTime={handleTakenTime}
                    />
                </Suspense>

                <br/>
                <div>
                    {employees.map((employee, index) => (
                        <Toggle
                            key={index}
                            aria-label={`Toggle ${employee}`}
                            className={"px-2 py-2 w-20"}
                            onClick={() => handleEmployeeToggle(employee)}
                            disabled={disabledEmployees.includes(employee)}
                        >
                            <label>{employee}</label>
                        </Toggle>
                    ))}
                </div>


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