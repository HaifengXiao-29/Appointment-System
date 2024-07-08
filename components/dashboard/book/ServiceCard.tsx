'use client'

import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {useState} from "react";

export default function ServiceCard({serviceName, serviceImg, serviceDes, onSelect }) {


    const [isSelected, setIsSelected] = useState(false);

    const handleCardClick = () => {
        setIsSelected(prevState => !prevState);
        onSelect(serviceName, !isSelected);
    };


    return (
        <>
            <Card onClick={handleCardClick}
                  className={`w-[200px] ${isSelected ? 'bg-gray-100' : 'hover:border-2 hover:border-gray-300'}`}
            >
                <CardHeader>

                    <CardTitle>{serviceName}</CardTitle>
                    <CardDescription>{serviceDes}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <h1>{serviceImg}</h1>
                    </div>

                </CardContent>
                <CardFooter className="flex justify-between">

                </CardFooter>
            </Card>

        </>
    )
}
