'use client'

import * as React from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useFormState, useFormStatus} from "react-dom";

export async function FormSubmit(prevState: any, formData: { get: (arg0: string) => any; }) {
    console.log(formData.get("name"))
    console.log(formData.get("phone"))
    console.log(formData.get("hour"))
    console.log(formData.get("isDay"))
    console.log(formData.get("date"))
    console.log(formData.get("service"))
    console.log(formData.get("duration"))
    console.log(formData.get("employee"))
    console.log(formData.get("notes"))
    const res = await fetch("http://localhost:3000/api/post-calendar-events", {
        method: 'POST',
        body: formData
    })
    return await res.json()
}
export default function ServiceDetail() {
    const [state, FormAction] = useFormState(FormSubmit, '')
    //判断现在是否在加载中
    const {pending} = useFormStatus()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append('date', '`12');
        FormAction(formData);
    };
    return (
        <>
            <form>
                <div>

                    <div className={"text-md text-green-500 py-4"}>
                        {state.message}
                    </div>

                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-row gap-4">
                            <div className="flex-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name={"name"} placeholder="Mattew Kim"/>
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" name={"phone"} placeholder="000-000-0000"/>
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name={"email"} placeholder="abc@gmail.com"/>
                        </div>


                        <div>
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea id="notes" name={"notes"} placeholder="Type your message here."/>
                        </div>


                    </div>
                </div>

                <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-10">
                    <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>
                    <div className="mb-4">
                        <div className="flex justify-between">
                            <span className="font-semibold">Date:</span>
                            <span>01-07-2024 09:00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Provider:</span>
                            <span>Health & Beauty Spa</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Location:</span>
                            <span className="text-red-400">2840 Main St, Glastonbury, CT 06033</span>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="mb-4">
                        <h3 className="font-semibold">Services:</h3>
                        <div className="flex justify-between mt-2">
                            <span>30 minutes - Head</span>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="flex justify-between font-bold mb-4">
                        <span>Total for booking:</span>
                        <span>$ 40</span>
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"

                                className="mr-2"
                            />
                            <span>I agree with the Terms & Conditions *</span>
                        </label>

                    </div>
                    <button
                        aria-disabled={pending}
                        className="w-full py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold rounded-full mt-4"
                    >
                        Confirm booking
                    </button>
                </div>
            </form>
        </>
    )
}