"use client"

import DashboardHead from "@/components/dashboard/Dashboard-head";
import DashboardLayer2 from "@/components/dashboard/Dashboard-layer2";
import DashboardLayer3 from "@/components/dashboard/Dashboard-layer3";
import DashboardFooter from "@/components/dashboard/Dashboard-footer";
import {CustomAlert} from "@/components/dashboard/CustomAlert";


export default function Dashboard() {

    return (
        <div className="h-screen flex flex-col">

            {/* 第一层是header */}
            <header
                className="flex justify-between items-center p-4 bg-white w-full h-[10vh]">
                <DashboardHead/>
            </header>

            {/*通知！！！！*/}
            <div className="absolute top-[8vh] left-1/2 transform -translate-x-1/2 w-full max-w-4xl  z-50">
                <CustomAlert />
            </div>

            {/* 第二层是主要背景图片 */
            }
            <main className="flex flex-col">
                <div className="w-full h-[60vh] flex-grow">
                    <DashboardLayer2/>
                </div>

                {/* 第三层是一些我们提供的service */}
                <div className="grid grid-cols-5 gap-4 p-4 w-full h-[20vh] bg-blue-100"> {/* 添加了背景颜色 */}
                    <DashboardLayer3/>
                </div>
            </main>

            {/* 第四层是footer */}
            <footer className="p-4 bg-gray-800 text-white w-full h-[10vh]">
                <DashboardFooter/>
            </footer>
        </div>
    )
}
