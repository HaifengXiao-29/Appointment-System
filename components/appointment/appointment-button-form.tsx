"use client"
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import * as React from "react";
import AppointmentForm from "@/components/appointment/appointment-form";


export default function AppointmentButton() {
    return (
        <>
            <div>
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
                            <AppointmentForm/>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}
