"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"
import {ChevronLeft} from 'lucide-react';

import ServiceCard from "@/components/dashboard/book/ServiceCard";
import {useRouter} from "next/navigation";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ErrorAlert from "@/components/unity/ErrorAlert";


export default function Service() {
    const router = useRouter();
    const [selectedServices, setSelectedServices] = React.useState([]);
    const [showModal, setShowModal] =  React.useState({ isVisible: false, message: "" });
    const handleButtonClick = (url) => {
        router.push(url); // 替换成你要导航的目标页面路径
    };

    const handleSelect = (name, isSelected) => {
        setSelectedServices(prevState => {
            if (isSelected) {
                return [...prevState, name];
            } else {
                return prevState.filter(service => service !== name);
            }
        });
    };

    const closeModal = () => {
        setShowModal({ isVisible: false, message: "" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('services', selectedServices)
        const services = formData.getAll("services")
        const duration = formData.get("duration")

        if (services.length === 0 || services.includes('')) {
            setShowModal({ isVisible: true, message: "Please select a service." });
            return;
        }

        if (!duration){
            setShowModal({ isVisible: true, message: "Please select a duration." });
            return;
        }

        const queryString = new URLSearchParams(Object.fromEntries(formData.entries())).toString();
        router.push(`/dashboard/book/time?${queryString}`);

    };
    return (
        <>

            <div className={"flex flex-col justify-between"}>
                <h1>
                    Service
                </h1>
                <br/>

                <div>
                    <Button
                        className={"px-2 py-2 w-20"}
                        variant="link"
                        onClick={() => handleButtonClick('/dashboard')}>
                        <ChevronLeft/>
                        Back
                    </Button>
                </div>

                <br/>
                <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
                    <ServiceCard
                        serviceName={'Head'}
                        serviceImg={'image'}
                        serviceDes={'service 1'}
                        onSelect={handleSelect}
                    />

                    <ServiceCard
                        serviceName={'Foot'}
                        serviceImg={'image'}
                        serviceDes={'service 2'}
                        onSelect={handleSelect}
                    />

                    <Select name={"duration"}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Duration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Duration</SelectLabel>
                                <SelectItem value="40">40 min</SelectItem>
                                <SelectItem value="60">1 hour</SelectItem>
                                <SelectItem value="90">1 hour 30 min</SelectItem>
                                <SelectItem value="120">2 hour</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>


                    <Button
                        className="px-2 py-2 w-20"
                        type={"submit"}
                       >
                        Next
                    </Button>
                </form>

                <br/>



                <ErrorAlert showModal={showModal} closeModal={closeModal} />



            </div>

        </>
    )
}
