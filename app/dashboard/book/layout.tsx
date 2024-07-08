import DashboardHead from "@/components/dashboard/Dashboard-head";
import DashboardFooter from "@/components/dashboard/Dashboard-footer";
import * as React from "react";

export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <body>
        <div className="h-screen flex flex-col">
            {/* 第一层是header */}
            <header
                className="flex justify-between items-center p-4 bg-white border-b-4 border-gray-300 w-full h-[10vh]">
                <DashboardHead/>
            </header>


            <main className="flex-grow flex flex-col">
                {children}
            </main>


            {/* 第四层是footer */}
            <footer className="p-4 bg-gray-800 text-white w-full h-[10vh]">
                <DashboardFooter/>
            </footer>
        </div>
        </body>

    )
}