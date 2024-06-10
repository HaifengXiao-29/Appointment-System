"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import {SunDim, Moon, Dot, Minus} from "lucide-react"
import {Toggle} from "@/components/ui/toggle"
import {useState} from "react";


export default function AppointmentForm() {
    const [isDay, setIsDay] = useState(true);

    const toggleIcon = () => {
        setIsDay(prevIsDay => !prevIsDay);
    };

    return (
        <main>
            <div className="h-screen flex justify-center items-center">
                <Card className="w-[600px] p-6">
                    <CardHeader>
                        <CardTitle>Welcome</CardTitle>
                        <CardDescription>Have a wonderful day!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid gap-6">
                                <div className="flex gap-6">
                                    <div className="w-1/2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Mattew Kim"/>
                                    </div>
                                    <div className="w-1/2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" placeholder="000-000-0000"/>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="abc@gmail.com"/>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <div className="flex flex-col">
                                        <Label htmlFor="startTime">Start Time</Label>
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
                                    <Minus className="w-6 h-6 mt-3"/>
                                    <div className="flex flex-col">
                                        <Label htmlFor="endTime">End Time</Label>
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
                                    <div className="mt-3">
                                        <Toggle aria-label="Toggle day/night" onPressedChange={toggleIcon}>
                                            {isDay ? <SunDim/> : <Moon/>}
                                        </Toggle>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="program">Program</Label>
                                    <Select>
                                        <SelectTrigger id="program">
                                            <SelectValue placeholder="Select"/>
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="Miki">Head 45 min</SelectItem>
                                            <SelectItem value="Tommy">Foot 45 min</SelectItem>
                                            <SelectItem value="Astro">Body 45 min</SelectItem>
                                            <SelectItem value="Jason">Head 10</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="employee">Employee</Label>
                                    <Select>
                                        <SelectTrigger id="employee">
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
                    </CardContent>
                    <CardFooter className="flex justify-end gap-4">
                        <Button variant="outline">Cancel</Button>
                        <Button>Done</Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
    )
}
