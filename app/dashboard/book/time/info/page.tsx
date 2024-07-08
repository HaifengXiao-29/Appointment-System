'use client'

import * as React from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";
import ServiceDetail from "@/components/dashboard/book/ServiceDetail";




export default function Info() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const handleButtonClick = (url) => {
        const params = new URLSearchParams(searchParams).toString();
        router.push(`${url}?${params}`); // 替换成你要导航的目标页面路径
    };

    return (

        <>

            <div className="mb-4">
                <Button
                    className={"px-2 py-2 w-20 text-lg"}
                    variant="link"
                    onClick={() => handleButtonClick('/dashboard/book/time')}>
                    <ChevronLeft/>
                    Back
                </Button>
            </div>

            <div className={"flex flex-col justify-between"}>



                <div>

                    <ServiceDetail/>
                </div>


            </div>
        </>

    )
}