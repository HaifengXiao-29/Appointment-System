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
import {SunDim, Moon, Dot} from "lucide-react"
import {Toggle} from "@/components/ui/toggle"
import {useState} from "react";


export default function AppointmentForm() {
    const [isDay, setIsDay] = useState(true);

    const toggleIcon = () => {
        setIsDay(prevIsDay => !prevIsDay);
    };

    return (
        <main>
            <div className="h-screen grid place-items-center">
                <Card className="w-[500px]">
                    <CardHeader>
                        <CardTitle>Welcome</CardTitle>
                        <CardDescription>Have a wonderful day !</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Mattew Kim"/>
                                    </div>
                                    <div className="flex-1">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" placeholder="000-000-0000"/>
                                    </div>
                                </div>


                                <div className="flex gap-1 items-center">
                                    <div className="flex gap-4 items-center">
                                        <div className={"flex-1"}>
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" placeholder="abc@gmail.com"/>
                                        </div>
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

                                <div>
                                    <Label htmlFor="program">Program</Label>
                                    <Select>
                                        <SelectTrigger id="program">
                                            <SelectValue placeholder="Select"/>
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="Head,45">Head 45 min</SelectItem>
                                            <SelectItem value="Head,60">Head 60 min</SelectItem>
                                            <SelectItem value="Body,40">Body 40 min</SelectItem>
                                            <SelectItem value="Foot,40">Foot 40 min</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Done</Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
    )
}
