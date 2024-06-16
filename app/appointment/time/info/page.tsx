'use client'

import * as React from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";

export default function Info() {
    return (

        <>
            <div className={"flex flex-col justify-between"}>
                <h1>
                    User Info
                </h1>
                <Link href={'/appointment/time'}>
                    <Button className={"px-2 py-2"} variant="link">
                        <ChevronLeft/>
                        Back
                    </Button>
                </Link>


            </div>
        </>

    )
}