'use client'

import * as React from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import {Suspense} from "react";
import {useRouter} from "next/navigation";
import CustomDatePicker from "@/components/dashboard/book/time/CustomDatePicker";
export default function Time() {
    const router = useRouter();

    const handleButtonClick = (url) => {
        router.push(url); // 替换成你要导航的目标页面路径
    };


    return (
        <>
            <div className={"flex flex-col justify-between"}>
                <h1>
                    Time
                </h1>
                <br/>

                <div>
                    <Button
                        className={"px-2 py-2 w-20"}
                        variant="link"
                        onClick={() => handleButtonClick('/dashboard/book')}>
                        <ChevronLeft/>
                        Back
                    </Button>
                </div>

                <br/>
                <Suspense fallback={"loading"}>
                    <CustomDatePicker/>
                </Suspense>

                <br/>

                <Button
                    className={"px-2 py-2 w-20"}
                    variant="outline"
                    onClick={() => handleButtonClick('/dashboard/book/time/info')}>
                    Next
                </Button>

            </div>
        </>
    )
}