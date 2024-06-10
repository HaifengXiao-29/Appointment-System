"use client"
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {Dot, Moon, SunDim} from "lucide-react";
import {Toggle} from "@/components/ui/toggle";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import * as React from "react";
import {useState} from "react";

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



export default function AppointmentButton() {
    const [isDay, setIsDay] = useState(true);
    const [date, setDate] = React.useState<Date>();

    const toggleIcon = () => {
        setIsDay(prevIsDay => !prevIsDay);
    };

    return (
        <main>
            <div className="h-screen grid place-items-center">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Make Appointment</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Welcome</DialogTitle>
                            <DialogDescription>
                                Have a wonderful day !
                            </DialogDescription>
                        </DialogHeader>
                        <div>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-row gap-4">
                                        <div className="flex-1">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" placeholder="Mattew Kim"/>
                                        </div>
                                        <div className="flex-1">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input id="phone" placeholder="000-000-0000"/>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="abc@gmail.com"/>
                                    </div>

                                    <div className="flex gap-1 items-center">
                                        <div className="flex gap-4 items-center">
                                            <div>
                                                <Label htmlFor="Start time">Start Time</Label>
                                                <InputOTP maxLength={4}>
                                                    <InputOTPGroup>
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

                                    <div  className="flex flex-col gap-1">
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
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
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
                                            <Select>
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
                                            <Select>
                                                <SelectTrigger id="duration">
                                                    <SelectValue placeholder="Select"/>
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
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select"/>
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
                                        <Textarea id="notes" placeholder="Type your message here."/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Done</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </main>
    )
}
