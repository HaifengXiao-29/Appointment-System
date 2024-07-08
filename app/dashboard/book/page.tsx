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
    const [showModal, setShowModal] = React.useState({isVisible: false, message: ""});





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
        setShowModal({isVisible: false, message: ""});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('services', selectedServices)
        const services = formData.getAll("services")
        const duration = formData.get("duration")

        if (services.length === 0 || services.includes('')) {
            setShowModal({isVisible: true, message: "Please select a service."});
            return;
        }

        if (!duration) {
            setShowModal({isVisible: true, message: "Please select a duration."});
            return;
        }

        const queryString = new URLSearchParams(Object.fromEntries(formData.entries())).toString();
        router.push(`/dashboard/book/time?${queryString}`);

    };
    return (
        <>
            <Button
                className="px-2 py-2 w-20 mb-4 text-lg"
                variant="link"
                onClick={() => handleButtonClick('/dashboard')}
            >
                <ChevronLeft/>
                Back
            </Button>


            <div className="flex flex-col justify-center items-center py-10 px-4 gap-4">
                <h1 className="text-4xl font-semibold mb-4 relative inline-block">
                    What we offer
                    <span className="block h-1 bg-blue-300 absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-1/3"></span>
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-center">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <ServiceCard
                            serviceName="Body"
                            serviceImg="image"
                            serviceDes="service 1"
                            onSelect={handleSelect}
                        />

                        <ServiceCard
                            serviceName="Foot"
                            serviceImg="image"
                            serviceDes="service 2"
                            onSelect={handleSelect}
                        />
                    </div>

                    <div className="flex flex-row justify-between gap-4 mt-6">
                        <Select name="duration">
                            <SelectTrigger className="w-40 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select Duration"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Duration</SelectLabel>
                                    <SelectItem value="30">30 min</SelectItem>
                                    <SelectItem value="60">1 hour</SelectItem>
                                    <SelectItem value="90">1 hour 30 min</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>


                        <Button
                            className="px-4 py-2 text-lg"
                            type={"submit"}
                        >
                            Next
                        </Button>
                    </div>
                </form>




                <ErrorAlert showModal={showModal} closeModal={closeModal}/>
            </div>
        </>

    )
}
