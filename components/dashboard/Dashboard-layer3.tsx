'use client'

import { SunMedium, Activity, BellOff, CircleDollarSign, SquareUser } from "lucide-react"

export default function DashboardLayer3() {

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4"><SunMedium size={50}/></div>
                <h2 className="text-lg">Signature Pedi & Mani</h2>
                <p className="text-sm">Nail Wellness</p>
            </div>
            {/*<Separator orientation="vertical"/>*/}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4"><Activity size={50}/></div>
                <h2 className="text-lg">Safe & Healthy</h2>
                <p className="text-sm">Service Sortie</p>
            </div>
            {/*<Separator orientation="vertical"/>*/}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4"><BellOff size={50}/></div>
                <h2 className="text-lg">Silence & Unwinding</h2>
                <p className="text-sm">& Spa Retreat</p>
            </div>
            {/*<Separator orientation="vertical"/>*/}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4"><CircleDollarSign size={50}/></div>
                <h2 className="text-lg">Competitive Prices</h2>
                <p className="text-sm">& Various Deals</p>
            </div>
            {/*<Separator orientation="vertical"/>*/}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4"><SquareUser size={50}/></div>
                <h2 className="text-lg">Contact & Meet</h2>
                <p className="text-sm">Focus on Service</p>
            </div>
        </>
    )
}