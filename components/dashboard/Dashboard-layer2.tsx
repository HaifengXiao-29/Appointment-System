"use client";

import Link from "next/link";

export default function DashboardLayer2() {
  return (
    <>
      <div className="h-full bg-leaf bg-cover bg-center w-full">
        <div className="bg-opacity-75 bg-white w-full">
            <h1 className="text-4xl font-bold text-center pt-4">
              Beauty & Relaxation
            </h1>
            <p className="text-center mt-4">
              Your spa description goes here. Why we&apos;re special...
            </p>
            <Link href="dashboard/book">Make Appointment</Link>
          </div>
      </div>
    </>
  );
}
