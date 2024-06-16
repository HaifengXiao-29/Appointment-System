'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import {useState} from "react";

export function ServiceCard() {

    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(prevState => !prevState);
    };


    return (
            <Card onClick={handleCardClick} className={`w-[350px] transition-all ${isClicked ? 'bg-gray-100' : 'hover:border-1 hover:border-gray-300'}`}
            >
                <CardHeader>
                    <CardTitle>Service one</CardTitle>
                    <CardDescription>Head</CardDescription>
                </CardHeader>
                <CardContent>
                    <h1>
                        45 mins
                    </h1>
                </CardContent>
                <CardFooter className="flex justify-between">

                </CardFooter>
            </Card>
    )
}
