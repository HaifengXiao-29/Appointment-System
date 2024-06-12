"use client"

import AppointmentButton from "@/components/appointment/appointment-button-form";
import {Suspense} from "react";


export default function Dashboard() {

    return (
        <>
            <h1>Dashboard</h1>
            <Suspense fallback={"loading"}>
                <AppointmentButton/>
            </Suspense>
        </>
    )
}
