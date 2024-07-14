import DashboardHead from "@/components/dashboard/Dashboard-head";
import DashboardFooter from "@/components/dashboard/Dashboard-footer";

export default function AboutUs() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <header className="flex justify-between items-center p-4 bg-white border-gray-300 w-full h-[10vh]">
          <DashboardHead />
        </header>

        <main className="flex flex-col">
          <div className="w-full h-[80vh] flex-grow">
          </div>
        </main>

        <footer className="p-4 bg-gray-800 text-white w-full h-[10vh]">
          <DashboardFooter />
        </footer>
      </div>
    </>
  );
}
