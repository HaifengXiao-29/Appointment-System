'use client'

import * as React from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import {Suspense, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import CustomDatePicker from "@/components/dashboard/book/time/CustomDatePicker";
import axios from "axios";
import {Toggle} from "@/components/ui/toggle";
import ErrorAlert from "@/components/unity/ErrorAlert";
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');

  .custom-font {
    font-family: 'Playwrite GB S', cursive;
    font-weight: 400; /* 根据需要调整权重 */
    font-style: italic; /* 你也可以设置为italic */
  }
  .custom-button {
    background-color: #3B82F6; /* 按钮背景色 */
    color: white; /* 按钮文字颜色 */
    border: none; /* 去掉按钮边框 */
    border-radius: 12px; /* 按钮圆角 */
    cursor: pointer; /* 鼠标悬停时显示指针 */
    transition: background-color 0.3s ease; /* 背景色过渡效果 */
  }

  .custom-text {
    color: #333; /* 自定义文本颜色 */
    font-size: 1.1rem; /* 字体大小 */
  }

`;

export default function Time() {
    const router = useRouter();
    const [selected, setSelected] = useState<Date>();

    const [queryParams, setQueryParams] = useState({});

    const [employees, setEmployees] = useState([]);
    const [takenSpots, setTakenTime] = useState([]);

    const [disabledEmployees, setDisabledEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState("");

    const [selectedSlot, setSelectedSlot] = useState({start: "", end: ""});
    const [showModal, setShowModal] = React.useState({isVisible: false, message: ""});

    const closeModal = () => {
        setShowModal({isVisible: false, message: ""});
    };

    const handleButtonClick = (url) => {
        router.push(url); // 替换成你要导航的目标页面路径
    };

    const handleTakenTime = (data) => {
        setTakenTime(data);
        setDisabledEmployees(data.map(spot => spot.employee));
    };

    const handleSlotSelect = (start, end) => {
        setSelectedSlot({start, end});
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


    const handleSubmit = (event) => {
        event.preventDefault();

        const params = new URLSearchParams(queryParams);
        if (selected) {
            const date = selected.toISOString();
            params.set('date', date)
        } else {
            setShowModal({isVisible: true, message: "Please select a date."});
            return;
        }
        if (selectedSlot.start && selectedSlot.end) {
            params.set('start', selectedSlot.start);
            params.set('end', selectedSlot.end);
        } else {
            setShowModal({isVisible: true, message: "Please select a time."});
            return;
        }
        if (selectedEmployee) {
            params.set('employee', selectedEmployee);
        } else {
            setShowModal({isVisible: true, message: "Please select a technician."});
            return;
        }


        router.push(`/dashboard/book/time/info?${params.toString()}`);
    };

    return (
        <>
            <GlobalStyle/>
            <div className={"flex flex-col gap-8"}>

                <div className="mb-4">
                    <Button
                        className="px-2 py-2 w-20 text-lg"
                        variant="link"
                        onClick={() => handleButtonClick('/dashboard/book')}>
                        <ChevronLeft/>
                        Back
                    </Button>
                </div>

                <div className={"flex flex-col gap-4"}>


                    <div className="flex flex-col md:flex-row gap-8 justify-center ">
                        <div className={"flex flex-col items-center gap-8 "}>
                            <h1 className="custom-font text-4xl ">Pick your time</h1>
                            <div className="flex justify-center">
                                <Suspense fallback={"loading"}>
                                    <CustomDatePicker
                                        selected={selected}
                                        handleDateSelect={handleDateSelect}
                                        duration={queryParams.duration}
                                        takenTime={handleTakenTime}
                                        onTimeSelect={handleSlotSelect}
                                    />
                                </Suspense>
                            </div>
                        </div>


                        <div className="relative flex flex-col gap-10 p-4">
                            <div className={"flex flex-col gap-2"}>
                                <h2 className="text-lg font-semibold ">Selected Time:</h2>
                                <p className={"custom-text"}>
                                    {selectedSlot.start && selectedSlot.end
                                        ? `${selectedSlot.start} - ${selectedSlot.end}`
                                        : selectedSlot.start || selectedSlot.end || "No time selected"}
                                </p>
                                <div>
                                    <div className="w-full h-0.5 bg-blue-300 my-4"></div>
                                    <div className="w-full h-0.5 bg-blue-300 my-4 opacity-30"></div>
                                </div>


                            </div>


                            <div>
                                {employees.map((employee, index) => (
                                    <Toggle
                                        key={index}
                                        aria-label={`Toggle ${employee}`}
                                        className="px-2 py-2 w-40 gap-4"
                                        onClick={() => handleEmployeeToggle(employee)}
                                        disabled={disabledEmployees.includes(employee)}
                                    >
                                        <label>{employee}</label>
                                    </Toggle>
                                ))}
                            </div>

                            <div className="absolute bottom-14 w-1/2 h-0.5 bg-blue-300 my-4 self-end"></div>
                            <Button
                                className="px-2 py-2 w-40 text-lg absolute bottom-4 self-end custom-button"
                                variant="outline"
                                onClick={handleSubmit}>
                                Next
                            </Button>


                        </div>

                        <ErrorAlert showModal={showModal} closeModal={closeModal}/>
                    </div>
                </div>
            </div>
        </>
    )
}