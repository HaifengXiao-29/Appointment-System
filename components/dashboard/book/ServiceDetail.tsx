'use client'

import * as React from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useFormState, useFormStatus} from "react-dom";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {rotate} from "next/dist/server/lib/squoosh/impl";
import ErrorAlert from "@/components/unity/ErrorAlert";

export async function FormSubmit(prevState: any, formData: { get: (arg0: string) => any; }) {

    const res = await fetch("http://localhost:3000/api/post-calendar-events", {
        method: 'POST',
        body: formData
    })

    return await res.json()
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export default function ServiceDetail() {
    const router = useRouter();
    const [state, FormAction] = useFormState(FormSubmit, '')
    const [showModal, setShowModal] = React.useState({isVisible: false, message: ""});

    const closeModal = () => {
        setShowModal({isVisible: false, message: ""});
    };

    //判断现在是否在加载中
    const {pending} = useFormStatus()

    const [queryParams, setQueryParams] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append('date', queryParams.date);
        formData.append('start', queryParams.start);
        formData.append('end', queryParams.end);
        formData.append('services', queryParams.services);
        formData.append('employee', queryParams.employee);
        formData.append('duration', queryParams.duration);

        const uname = formData.get('name')
        const uphone = formData.get('phone')
        const uemail = formData.get('email')
        const phonePattern = /^\d{3}-?\d{3}-?\d{4}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!uname){
            setShowModal({isVisible: true, message: "Please enter your name."});
            return;
        }else if (!uphone || !phonePattern.test(uphone as string)){
            setShowModal({isVisible: true, message: "Please enter a valid phone number."});
            return;
        }else if (!uemail || !emailPattern.test(uemail as string)){
            setShowModal({isVisible: true, message: "Please enter a valid email."});
            return;
        }

        FormAction(formData);
        // router.push('http://localhost:3000/dashboard')
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const query = Object.fromEntries(urlParams.entries());
        setQueryParams(query);

    }, []);
    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className={"flex flex-col gap-5 bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full"}
                >

                    <div className={"flex flex flex-col md:flex-row"}>
                        <div className={"flex flex-1 flex-col"}>
                            {/*填写section*/}
                            <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>



                            <div className="flex flex-row gap-4 mb-4">
                                <div className="flex-1">
                                    <Label htmlFor="name" className={"font-semibold"}>Name</Label>
                                    <Input id="name" name={"name"} placeholder="Mattew Kim" />
                                </div>
                                <div className="flex-1">
                                    <Label htmlFor="phone" className={"font-semibold"}>Phone</Label>
                                    <Input id="phone" name={"phone"} placeholder="000-000-0000" />
                                </div>
                            </div>

                            <div className={"mb-4"}>
                                <Label htmlFor="email" className={"font-semibold"}>Email</Label>
                                <Input id="email" name={"email"} placeholder="abc@gmail.com" />
                            </div>


                            <div className={"mb-4"}>
                                <Label htmlFor="notes" className={"font-semibold"}>Notes</Label>
                                <Textarea id="notes" name={"notes"} placeholder="Type your message here."/>
                            </div>
                        </div>

                        {/* Vertical line separator */}
                        <div className="hidden md:block border-l-2 border-gray-300 mx-4 opacity-50"></div>


                        {/*service detail section*/}
                        <div className={"flex flex-1 flex-col justify-center"}>

                            <div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Date:</span>
                                    <span>{formatDate(queryParams.date)} {queryParams.start}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Provider:</span>
                                    <span>Health & Beauty Spa</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Massage therapist:</span>
                                    <span className="text-red-400">{queryParams.employee}</span>
                                </div>
                            </div>


                            <div className="p-4 bg-gray-100 shadow-md rounded-lg mt-10 border border-gray-200">

                                <div className="mb-4">
                                    <h3 className="font-semibold text-xl">Services:</h3>
                                    <div className="flex justify-between mt-2">
                                        <span>{queryParams.duration} minutes </span>
                                        <span>{queryParams.services}</span>
                                    </div>
                                </div>

                                <hr className="my-4 border-dashed border-gray-200" style={{ borderWidth: '1.5px' }}/>
                                <div className="flex justify-between font-bold">
                                    <span>Total for booking:</span>
                                    <span className={"text-2xl"}>$ 40</span>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Horizontal separator line */}
                    <hr className="mt-2 border-gray-300 mx-4 opacity-50" style={{ borderWidth: '1.5px' }}/>

                    {/* Centered Confirm Booking Button */}
                    <div className="flex justify-end">
                        <button
                            aria-disabled={pending}
                            className="px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold rounded-full"
                            type={"submit"}
                        >
                            Confirm booking
                        </button>
                    </div>

                </form>
                <ErrorAlert showModal={showModal} closeModal={closeModal}/>


            </div>


        </>
    )
}