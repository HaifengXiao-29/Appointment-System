"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"
import {ChevronLeft} from 'lucide-react';

import {ServiceCard} from "@/components/appointment/ServiceCard";
import {useRouter} from "next/navigation";

export default function Service() {
    const router = useRouter();

    const handleButtonClick = (url) => {
        router.push(url); // 替换成你要导航的目标页面路径
    };

    return (
        <>
            <div className={"flex flex-col justify-between"}>
                <h1>
                    Service
                </h1>
                <br/>

                <div>
                    <Button
                        className={"px-2 py-2 w-20"}
                        variant="link"
                        onClick={() => handleButtonClick('/dashboard')}>
                        <ChevronLeft/>
                        Back
                    </Button>
                </div>

                <br/>

                <ServiceCard/>
                <br/>


                <Button
                    className="px-2 py-2 w-20"
                    onClick={() => handleButtonClick('/appointment/time')}>
                    Next
                </Button>


            </div>

        </>
    )
}
