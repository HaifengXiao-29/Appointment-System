'use client'

import {Navigation_top} from "@/components/appointment/Navigation-top";

export default function DashboardHead() {
    return (
        <>
            <div className='ml-10'>
                LOGO
            </div>
            <div className="flex items-center space-x-4">
                <Navigation_top/>
            </div>
        </>
    )
}