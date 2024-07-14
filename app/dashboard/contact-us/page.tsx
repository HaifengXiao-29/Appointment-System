import DashboardHead from "@/components/dashboard/Dashboard-head";
import DashboardFooter from "@/components/dashboard/Dashboard-footer";
import ContactLayer from "@/components/dashboard/contact-us/Contact-layer";

export default function ContactUs() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <header className="flex justify-between items-center p-4 bg-white w-full h-[10vh]">
          <DashboardHead />
        </header>

        <main className="flex flex-col ">
          <div className="w-full h-[20vh] flex-grow bg-stone-200">
            <h1>Contact Us</h1>
            <p>We&apos;re Here to Help and Hear from You!</p>
          </div>
          <div className="w-full h-[60vh] flex-grow">
            <ContactLayer />
          </div>
        </main>

        <footer className="p-4 bg-gray-800 text-white w-full h-[10vh]">
          <DashboardFooter />
        </footer>
      </div>
    </>
  );
}
