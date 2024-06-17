import DashboardHead from "@/components/dashboard/Dashboard-head";

export default function AboutUs() {
    return (
        <>
            <div className="h-screen flex flex-col">
                <header
                    className="flex justify-between items-center p-4 bg-white border-b-4 border-gray-300 w-full h-[10vh]">
                    <DashboardHead/>
                </header>


            </div>
        </>
    )
}