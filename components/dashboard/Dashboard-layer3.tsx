'use client'

import {Separator} from "@/components/ui/separator"

export default function DashboardLayer3() {

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2">image</div>
                <h2 className="text-lg font-semibold">Signature Pedi & Mani</h2>
                <p className="text-sm">Nail Wellness</p>
            </div>
            {/*<Separator orientation="vertical"/>*/}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2">image</div>
                <h2 className="text-lg font-semibold">Safe & Healthy</h2>
                <p className="text-sm">Service Sortie</p>
            </div>
            {/*<Separator orientation="vertical"/>*/}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2">image</div>
                <h2 className="text-lg font-semibold">Silence & Unwinding</h2>
                <p className="text-sm">& Spa Retreat</p>
            </div>
            {/*<Separator orientation="vertical"/>*/}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2">image</div>
                <h2 className="text-lg font-semibold">Competitive Prices</h2>
                <p className="text-sm">& Various Deals</p>
            </div>
            {/*<Separator orientation="vertical"/>*/}
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2">image</div>
                <h2 className="text-lg font-semibold">Contact & Meet</h2>
                <p className="text-sm">Focus on Service</p>
            </div>
        </>
    )
}