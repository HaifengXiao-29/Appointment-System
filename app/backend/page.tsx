"use client"
import React from 'react';
import {Suspense} from "react";
import SystemCalendar from "@/components/appointment/system-calendar";

export default function backend() {
    return (
        <>
        <Suspense fallback={"loading"}>
            <SystemCalendar/>
        </Suspense>

        </>


    )
}
