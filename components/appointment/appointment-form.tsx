'use client'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {Calendar as CalendarIcon, Dot, Moon, SunDim} from "lucide-react";
import {Toggle} from "@/components/ui/toggle";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import * as React from "react";
import {useState} from "react";
import {useFormState, useFormStatus} from "react-dom";

export async function FormSubmit(prevState: any, formData: { get: (arg0: string) => any; }) {
    console.log(formData.get("notes"))
    console.log(formData.get("hour"))
    const res = await fetch("http://localhost:3000/api/post-calendar-events", {
        method: 'POST',
        body: formData
    })
    return await res.json()
}

export const revalidate = 10
export default function AppointmentForm() {

    const [isDay, setIsDay] = useState(true);
    const [date, setDate] = React.useState<Date>();
    const [state, FormAction] = useFormState(FormSubmit, '')
    const [value, setValue] = React.useState("")
    //判断现在是否在加载中
    const {pending} = useFormStatus()



    const toggleIcon = () => {
        setIsDay(prevIsDay => !prevIsDay);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("isDay", isDay ? "day" : "night");
        formData.append("date", date ? format(date, "PPP") : "");
        FormAction(formData);

    };

    return (
        <>
            <div className={"text-md text-green-500 py-4"}>
                {state.message}
            </div>
            <form onSubmit={handleSubmit} >
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

                    <div className="flex gap-1 items-center">
                        <div className="flex gap-4 items-center">
                            <div>
                                <Label htmlFor="Start time">Start Time</Label>
                                <InputOTP name={"hour"} maxLength={4}>
                                    <InputOTPGroup >
                                        <InputOTPSlot index={0}/>
                                        <InputOTPSlot index={1}/>
                                    </InputOTPGroup>
                                    <div className="flex flex-col items-center justify-center">
                                        <Dot/>
                                        <Dot/>
                                    </div>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={2}/>
                                        <InputOTPSlot index={3}/>
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Toggle aria-label="Toggle day/night" onPressedChange={toggleIcon}>
                                {isDay ? <SunDim/> : <Moon/>}
                            </Toggle>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label htmlFor="Date">Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent name={"date"} className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className={"flex flex-row gap-2"}>
                        <div className={"flex-1"}>
                            <Label htmlFor="service">Service</Label>
                            <Select name={"service"} >
                                <SelectTrigger id="service">
                                    <SelectValue placeholder="Select"/>
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Head">Head</SelectItem>
                                    <SelectItem value="Body">Body</SelectItem>
                                    <SelectItem value="Foot">Foot</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={"flex-1"}>
                            <Label htmlFor="duration">Duration</Label>
                            <Select name={"duration"}>
                                <SelectTrigger id="duration">
                                    <SelectValue  placeholder="Select"/>
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="30">30 min</SelectItem>
                                    <SelectItem value="60">1 hour</SelectItem>
                                    <SelectItem value="120">2 hour</SelectItem>
                                    <SelectItem value="150">2.5 hour</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="employee">Employee</Label>
                        <Select name={"employee"}>
                            <SelectTrigger id="employee">
                                <SelectValue  placeholder="Select"/>
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="Miki">Miki</SelectItem>
                                <SelectItem value="Tommy">Tommy</SelectItem>
                                <SelectItem value="Astro">Astro</SelectItem>
                                <SelectItem value="Jason">Jason</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea id="notes" name={"notes"} placeholder="Type your message here."/>
                    </div>

                    <div className={"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"}>
                        <Button aria-disabled={pending} type="submit">Done</Button>
                    </div>

                </div>

            </form>
        </>
    )
}